<template>
  <q-page class="q-pa-sm">
    <q-card>
      <q-table
        title="Suivi des véhicules Midipile"
        :rows="data"
        :hide-header="mode === 'grid'"
        :columns="columns"
        row-key="name"
        :grid="mode=='grid'"
        :filter="filter"
        :pagination="pagination"
      >
        <template v-slot:top-right="props">
          <q-input outlined dense debounce="300" v-model="filter" placeholder="Search">
            <template v-slot:append>
              <q-icon name="search"/>
            </template>
          </q-input>

          <q-btn
            flat
            round
            dense
            :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
            @click="props.toggleFullscreen"
            v-if="mode === 'list'"
          >
            <q-tooltip
              :disable="$q.platform.is.mobile"
              v-close-popup
            >{{props.inFullscreen ? 'Exit Fullscreen' : 'Toggle Fullscreen'}}
            </q-tooltip>
          </q-btn>

          <q-btn
            color="primary"
            icon-right="archive"
            label="Export csv"
            no-caps
            @click="exportTable"
          />
        </template>    

    <template v-slot:body-cell-SOC_fixe="props">
      <q-td :props="props">
        <div class="q-pa-md">
          <q-linear-progress size="25px" :value="progress1" color="accent">
            <div class="absolute-full flex flex-center">
              <q-badge color="white" text-color="accent" :label="progressLabel1" />
            </div>
          </q-linear-progress>
        </div>
      </q-td>
    </template>


        <template v-slot:body-cell-detail="props">
          <q-td :props="props">
            <q-btn @click="vehicule_dialog=true" dense round color="secondary" icon="pageview"/>
          </q-td>
        </template>
        <template v-slot:body-cell-action="props">
          <q-td :props="props">
            <div class="q-gutter-sm">
              <q-btn dense color="primary" icon="edit"/>
              <q-btn dense color="red" icon="delete"/>
            </div>
          </q-td>
        </template>
      </q-table>
    </q-card>
    <q-dialog v-model="vehicule_dialog">
      <q-card class="my-card" flat bordered>
        <q-card-section>
          <div class="text-h6">
            Détail véhicule
            <q-btn round flat dense icon="close" class="float-right" color="grey-8" v-close-popup></q-btn>
          </div>
        </q-card-section>
        <q-card-section horizontal>
          <q-card-section class="q-pt-xs">
            <div class="text-overline">Angoulême (Fr)</div>
            <div class="text-h5 q-mt-sm q-mb-xs">Midipile utilitaire</div>
            <div class="text-caption text-grey">
              ECO score moyen : 85%
            </div>
          </q-card-section>

          <q-card-section class="col-5 flex flex-center">
            <q-img
              class="rounded-borders"
              src="https://cdn.quasar.dev/img/boy-avatar.png"
            />
          </q-card-section>
        </q-card-section>

        <q-separator/>

        <q-card-section>
          Maintenance véhicule à jour | Aucune panne détectée depuis la dernière maintenance
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
    import {ref, computed} from 'vue'
    import {exportFile} from "quasar";

    function wrapCsvValue(val, formatFn) {
        let formatted = formatFn !== void 0 ? formatFn(val) : val;

        formatted =
            formatted === void 0 || formatted === null ? "" : String(formatted);

        formatted = formatted.split('"').join('""');

        return `"${formatted}"`;
    }

    export default {
        data() {
            return {
                filter: "",
                mode: "list",
                invoice: {},
                vehicule_dialog: false,
                columns: [
                    {
                        name: "vh_id",
                        align: "left",
                        label: "Id véhicule",
                        field: "vh_id",
                        sortable: true
                    },
                    {
                        name: "usr_id",
                        required: true,
                        label: "Utilisateur",
                        align: "left",
                        field: "usr_id",
                        sortable: true
                    },
                    {
                        name: "Niveau batterie fixe",
                        align: "left",
                        label: "Niveau batterie fixe",
                        field: "SOC_fixe",
                        sortable: true
                    },
                    {
                        name: "Niveau batterie fixe",
                        align: "left",
                        label: "Niveau batterie fixe",
                        field: "SOC_mobile",
                        sortable: true
                    },
                    {
                        name: "Ensoleillement",
                        align: "left",
                        label: "Ensoleillement",
                        field: "Psolar",
                        sortable: true
                    },
                    {
                        name: "Autonomie",
                        align: "left",
                        label: "Autonomie",
                        field: "Autonomie",
                        sortable: true
                    },
                    {
                        name: "Position",
                        align: "left",
                        label: "Position",
                        field: "Position",
                        sortable: true
                    },
                    {
                        name: "En utilisation",
                        align: "left",
                        label: "utilisation",
                        field: "utilisation",
                        sortable: true
                    },
                    {
                        name: "detail",
                        align: "left",
                        label: "Detail",
                        field: "detail",
                        sortable: true
                    },
                    {
                        name: "action",
                        align: "left",
                        label: "Action",
                        field: "action",
                        sortable: true
                    }
                ],
                data: [
                    {
                        vh_id: "Midipile 01",
                        usr_id: "Benoit",
                        SOC_fixe: "90 %",
                        SOC_mobile: "46%",
                        Psolar: "élevée",
                        Autonomie: "160 km",
                        Position: "test",
                        utilisation: "en cours",
                    },
                    {
                        vh_id: "Midipile 02",
                        usr_id: "Vincent",
                        SOC_fixe: "75 %",
                        SOC_mobile: "76%",
                        Psolar: "élevée",
                        Autonomie: "165 km",
                        Position: "test",
                        utilisation: "non utilisé",
                    },
                    {
                        vh_id: "Midipile 03",
                        usr_id: "Célian",
                        SOC_fixe: "95 %",
                        SOC_mobile: "13 %",
                        Psolar: "faible",
                        Autonomie: "145 km",
                        Position: "test",
                        utilisation: "en cours",
                    },
                    {
                        vh_id: "Midipile 04",
                        usr_id: "Ehouarn",
                        SOC_fixe: "25 %",
                        SOC_mobile: "45 %",
                        Psolar: "moyen",
                        Autonomie: "83 km",
                        Position: "test",
                        utilisation: "non utilisé",
                    },
                    {
                        vh_id: "Midipile 05",
                        usr_id: "Sébastien",
                        SOC_fixe: "69 %",
                        SOC_mobile: "86 %",
                        Psolar: "élevée",
                        Autonomie: "178 km",
                        Position: "test",
                        utilisation: "non utilisé",
                    }
                ],
                pagination: {
                    rowsPerPage: 10
                }
            };
        },
        setup () {
          const progress1 = ref(0.9)
          const progress2 = ref(0.75)
          const progress3 = ref(0.95)
          const progress4 = ref(0.25)
          const progress5 = ref(0.69)

          return {
            progress1,
            progressLabel1: computed(() => (progress1.value * 100).toFixed(2) + '%'),

            progress2,
            progressLabel2: computed(() => (progress2.value * 100).toFixed(2) + '%'),

            progress3,
            progressLabel3: computed(() => (progress3.value * 100).toFixed(2) + '%'),

            progress4,
            progressLabel4: computed(() => (progress4.value * 100).toFixed(2) + '%'),

            progress5,
            progressLabel5: computed(() => (progress5.value * 100).toFixed(2) + '%')
          }
        },
        methods: {
            exportTable() {
                // naive encoding to csv format
                const content = [this.columns.map(col => wrapCsvValue(col.label))]
                    .concat(
                        this.data.map(row =>
                            this.columns
                                .map(col =>
                                    wrapCsvValue(
                                        typeof col.field === "function"
                                            ? col.field(row)
                                            : row[col.field === void 0 ? col.name : col.field],
                                        col.format
                                    )
                                )
                                .join(",")
                        )
                    )
                    .join("\r\n");

                const status = exportFile("Midipile_list.csv", content, "text/csv");

                if (status !== true) {
                    this.$q.notify({
                        message: "Téléchargement refusé...",
                        color: "negative",
                        icon: "warning"
                    });
                }
            }
        }
    };
</script>
<style>
  .q-chip__content {
    display: block;
    text-align: center;
  }
</style>
