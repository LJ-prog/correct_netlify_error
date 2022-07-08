<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar class="text-white bg-primary">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <!-- <q-item to="/dashboardjson" exact title = "DRIVING THE SHIFT" rel="home">
          <img src="~assets/LOGO-MIDIPILE-MOBILITY-3-409px.png">
        </q-item> -->

        <q-toolbar-title class="text-h4 text-white" id="link" v-if="$q.platform.is.desktop">
          <a href="/dashboardjson">
          <!-- <q-btn class="text-h4 text-white" id="titleLink" to="/dashboardjson">Midipile Fleet Manager</q-btn> -->
            Midipile Fleet Manager
          </a>
        </q-toolbar-title>

        <q-toolbar-title class="ma-logo-mobile" id="linkLogo" exact title = "DRIVING THE SHIFT" rel="home" style="padding-left: 0px; padding-top: 9px; margin-right: 0px;" v-if="$q.platform.is.mobile">
          <a href="/dashboardjson">
          <img src="~assets/logo3.svg" />
          </a>
        </q-toolbar-title>


        <div class="q-pa-md q-gutter-sm" v-if="$q.platform.is.desktop">
          <toggle-dark-mode />
          <!-- <q-btn flat round color="white" icon="fab fa-twitter" href="https://twitter.com/midipilem" target="_blank"></q-btn>
          <q-btn flat round color="white" icon="fab fa-facebook-f" href="https://www.facebook.com/midipilemobility/" target="_blank"></q-btn>
          <q-btn flat round color="white" icon="fab fa-instagram" href="https://www.instagram.com/midipilemobility/" target="_blank"></q-btn>
          <q-btn flat round color="white" icon="fab fa-linkedin-in" href="https://fr.linkedin.com/company/midipile-mobility" target="_blank"></q-btn> -->
          <q-btn flat round color="white">
            <img src="~assets/administrateur-24px.svg" class="changeColor"/>
            <q-menu
              transition-show="jump-down"
              transition-hide="jump-up"
            >
            <div class="row no-wrap q-pa-md" style="padding-bottom: 4px">
                <div class="line align-center">
                  <div class="text-h6 q-mb-md">Contactez-nous :</div>
                    <q-list style="min-width: 100px">
                      <q-item clickable href="tel:+33788137050" v-if="$q.platform.is.mobile">
                        <q-item-section avatar style="padding-right: 0px; padding-left: 15px;">
                          <q-icon color="primary" name="mdi-phone-in-talk" />
                          <!-- <q-avatar color="primary" text-color="white" icon="mdi-phone-in-talk" /> -->
                        </q-item-section>
                        <q-item-section class="row justify-center">Tel</q-item-section>
                      </q-item>
                      <q-item clickable v-if="$q.platform.is.desktop" @click="pop = true">
                        <q-item-section avatar style="padding-right: 0px; padding-left: 15px;">
                          <q-icon color="primary" name="mdi-phone-in-talk" />
                          <!-- <q-avatar color="primary" text-color="white" icon="mdi-phone-in-talk" /> -->
                        </q-item-section>
                        <q-item-section class="row justify-center">Tel</q-item-section>
                      </q-item>

                      <q-separator />
                      <q-item clickable href="mailto:contactsite@midipile.eu">
                        <q-item-section avatar style="padding-right: 0px; padding-left: 15px;">
                          <q-icon color="primary" name="mdi-email" />
                        </q-item-section>
                        <q-item-section class="row justify-center">Mail</q-item-section>
                      </q-item>
                    </q-list>
                </div>
            </div>
            </q-menu>
          </q-btn>

          <q-btn flat round color="white" icon="mdi-bell-badge">
            <q-menu
              transition-show="scale"
              transition-hide="scale"
            >
              <q-list class="shadow-2 rounded-borders" style="min-width: 100px; padding-top: 1.5%; padding-bottom: 1%;" bordered>
                <q-item clickable v-ripple>
                  <q-item-section avatar thumbnail>
                    <q-icon style="left: 40%" color="primary" name="mdi-bell-ring"/>
                  </q-item-section>
                  <q-item-section class="row justify-center">
                    <q-item-label class="truncateToolongText" title="Le véhicule n°15 vient de démarrer. Il part vers le centre d'Angoulême.">Le véhicule n°15 vient de démarrer. Il part vers le centre d'Angoulême.</q-item-label>
                    <q-item-label caption lines="1"> Catégorie : Géofencing</q-item-label>
                  </q-item-section>
                  <q-item-section side top>
                    <q-item-label caption>Il y a 5 min</q-item-label>
                    <q-icon name="mdi-clock" color="grey" />
                  </q-item-section>
                </q-item>
                <q-separator spaced inset="item-thumbnail" style="margin-left:9.3%"/>

                <q-item clickable v-ripple>
                  <q-item-section avatar thumbnail>
                    <q-icon style="left: 40%" color="primary" name="mdi-bell-ring"/>
                  </q-item-section>
                  <q-item-section class="row justify-center">
                    <q-item-label class="truncateToolongText" title="Le véhicule N°3 est en mouvement.">Le véhicule N°3 est en mouvement.</q-item-label>
                    <q-item-label caption lines="1"> Catégorie : Géofencing</q-item-label>
                  </q-item-section>
                  <q-item-section side top>
                    <q-item-label caption>Il y a 5 min</q-item-label>
                    <q-icon name="mdi-clock" color="grey" />
                  </q-item-section>
                </q-item>
                <q-separator spaced inset="item-thumbnail" style="margin-left:9.3%"/>

                <q-item clickable v-ripple>
                  <q-item-section avatar thumbnail>
                    <q-icon style="left: 40%" color="primary" name="mdi-bell-ring"/>
                  </q-item-section>
                  <q-item-section class="row justify-center">
                    <q-item-label class="truncateToolongText" title="Le D'click N°6 a une anomalie batterie. Un technicien se rend sur place.">Le D'click N°6 a une anomalie batterie. Un technicien se rend sur place.</q-item-label>
                    <q-item-label caption lines="1"> Catégorie : Maintenance</q-item-label>
                  </q-item-section>
                  <q-item-section side top>
                    <q-item-label caption>Il y a 5 min</q-item-label>
                    <q-icon name="img:statics/wrench-clock.svg" class="filter-grey"/>
                  </q-item-section>
                </q-item>
                <q-separator spaced inset="item-thumbnail" style="margin-left:9.3%"/>

                <q-btn style="left:33%; margin-top:1.2%; margin-bottom:1.2%" unelevated rounded color="primary" label="VOIR LES NOTIFICATIONS" to="/seenotifications"  thumbnail />



              </q-list>
            </q-menu>
          </q-btn>

          <q-btn flat round color="white" icon="mdi-account-circle">
            <!-- <img src="~assets/followThisOne.svg" /> -->
            <q-menu
              transition-show="jump-down"
              transition-hide="jump-up"
            >
              <div class="row no-wrap q-pa-md" style="padding-bottom: 4px">
                <div class="line align-center">
                  <div class="text-h6 q-mb-md">Suivez-nous :</div>
                  <q-btn flat round color="primary" icon="fab fa-twitter" href="https://twitter.com/midipilem" target="_blank"></q-btn>
                  <q-btn flat round color="primary" icon="fab fa-facebook-f" href="https://www.facebook.com/midipilemobility/" target="_blank"></q-btn>
                  <q-btn flat round color="primary" icon="fab fa-instagram" href="https://www.instagram.com/midipilemobility/" target="_blank"></q-btn>
                  <q-btn flat round color="primary" icon="fab fa-linkedin-in" href="https://fr.linkedin.com/company/midipile-mobility" target="_blank"></q-btn>
                </div>

                <q-separator vertical inset class="q-mx-lg" />

                <div class="column items-center">
                  <q-avatar size="36px">
                    <img src="https://cdn.quasar.dev/img/avatar4.jpg">
                  </q-avatar>

                  <div class="text-subtitle1 q-mt-md q-mb-xs"><a href="/profile" class="linkProfile">Profil</a></div>

                  <q-btn
                    flat round color="primary"
                    icon="mdi-power"
                    @click="confirm = true"
                  />

                </div>
              </div>
            </q-menu>
          </q-btn>
          <!-- <q-btn flat round color="white" icon="mdi-exit-to-app">
            <q-menu
              transition-show="jump-down"
              transition-hide="jump-up"
            >
              <q-list style="min-width: 100px">
                <q-item clickable to="/profile">
                  <q-item-section class="items-center">Profil</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable @click="confirm = true">
                  <q-item-section class="items-center">Déconnexion</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn> -->

          <q-dialog v-model="confirm">
            <q-card>
              <q-card-section class="row items-center">
                <q-avatar icon="warning" color="primary" size="4rem" text-color="white" />
                <span class="q-ml-sm">Êtes-vous sûr de vouloir vous déconnectez ?</span>
              </q-card-section>

              <q-card-actions align="right">
                <q-btn flat label="Annuler" color="primary" v-close-popup />
                <q-btn flat label="Confirmer" color="primary" to= "/" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>

          <q-dialog v-model="pop">
            <q-card id="card">
              <q-card-section class="row justify-center">
                <!-- <q-icon color="primary" name="mdi-phone-in-talk" /> -->
                <div class="text-h6 q-mb-md">Appelez-nous au :</div>

              </q-card-section>
              <q-card-section class="row justify-center">
                <div class="text-h7 q-mb-md" style="margin-left: 2px; margin-top: 6.5px;">
                    {{ NumberPhoneAssist }}
                </div>
                <div class="q-ml-sm" id="numPhoneAssist">
                    <q-btn aria-label="Copier le lien" color="primary">
                      <span class="btn btn-info text-white copy-btn ml-auto" @click="setShow"  @click.stop.prevent="copyNumberPhone">
                      Copier
                    </span>
                    <input type="hidden" id="testing-code" :value="NumberPhoneAssist">
                    </q-btn>
                </div>
              </q-card-section>



              <!-- <q-card-actions align="right"> -->
                <!-- <q-btn flat label="Copier" color="primary" id="testing-code" class="copy-btn ml-auto" v-clipboard:copy="NumberPhoneAssist"
                  v-clipboard:success="handleCopyStatus(true)"
                  v-clipboard:error="handleCopyStatus(false)"
                /> -->
                <!-- <q-card-section>
                  <span class="btn btn-info text-white copy-btn ml-auto" @click="setShow"  @click.stop.prevent="copyNumberPhone">
                    Copier
                  </span>
                  <input type="hidden" id="testing-code" :value="NumberPhoneAssist">
                </q-card-section> -->

                <q-card-section id="msg">
                  <span v-if="show">Copié !</span>
                </q-card-section>
                <!-- <p v-if="copySucceeded === false">Press CTRL+C to copy.</p> -->
                <!-- <p v-if="copySucceeded === true">Copied!</p>
                <p v-if="copySucceeded === false">Press CTRL+C to copy.</p> -->
              <!-- </q-card-actions> -->
            </q-card>

          </q-dialog>


        </div>

        <div class="q-py-md q-gutter-sm" v-if="$q.platform.is.mobile">
          <toggle-dark-mode />
          <q-btn flat round color="white">
            <img src="~assets/administrateur-24px.svg" class="changeColor"/>
            <q-menu
              transition-show="jump-down"
              transition-hide="jump-up"
            >
            <div class="row no-wrap q-pa-md" style="padding-bottom: 4px">
                <div class="line align-center">
                  <div class="text-h6 q-mb-md">Contactez-nous :</div>
                    <q-list style="min-width: 100px">
                      <q-item clickable href="tel:+33788137050" v-if="$q.platform.is.mobile">
                        <q-item-section avatar style="padding-right: 0px; padding-left: 15px;">
                          <q-icon color="primary" name="mdi-phone-in-talk" />
                          <!-- <q-avatar color="primary" text-color="white" icon="mdi-phone-in-talk" /> -->
                        </q-item-section>
                        <q-item-section class="row justify-center">Tel</q-item-section>
                      </q-item>

                      <q-separator />
                      <q-item clickable href="mailto:contactsite@midipile.eu">
                        <q-item-section avatar style="padding-right: 0px; padding-left: 15px;">
                          <q-icon color="primary" name="mdi-email" />
                        </q-item-section>
                        <q-item-section class="row justify-center">Mail</q-item-section>
                      </q-item>
                    </q-list>
                </div>
            </div>
            </q-menu>
          </q-btn>
          <q-btn flat round color="white" icon="mdi-bell-badge">
            <q-menu
              transition-show="scale"
              transition-hide="scale"
            >
              <q-list class="shadow-2 rounded-borders" style="min-width: 100px; padding-top: 1.5%; padding-bottom: 1%;" bordered>
                <q-item clickable v-ripple>
                  <q-item-section avatar thumbnail>
                    <q-icon style="left: 40%" color="primary" name="mdi-bell-ring"/>
                  </q-item-section>
                  <q-item-section class="row justify-center">
                    <q-item-label class="truncateToolongText" title="Le véhicule n°15 vient de démarrer. Il part vers le centre d'Angoulême.">Le véhicule n°15 vient de démarrer. Il part vers le centre d'Angoulême.</q-item-label>
                    <q-item-label caption lines="1"> Catégorie : Géofencing</q-item-label>
                  </q-item-section>
                  <q-item-section side top>
                    <q-item-label caption>Il y a 5 min</q-item-label>
                    <q-icon name="mdi-clock" color="grey" />
                  </q-item-section>
                </q-item>
                <q-separator spaced inset="item-thumbnail" style="margin-left:9.3%"/>

                <q-item clickable v-ripple>
                  <q-item-section avatar thumbnail>
                    <q-icon style="left: 40%" color="primary" name="mdi-bell-ring"/>
                  </q-item-section>
                  <q-item-section class="row justify-center">
                    <q-item-label class="truncateToolongText" title="Le véhicule N°3 est en mouvement.">Le véhicule N°3 est en mouvement.</q-item-label>
                    <q-item-label caption lines="1"> Catégorie : Géofencing</q-item-label>
                  </q-item-section>
                  <q-item-section side top>
                    <q-item-label caption>Il y a 5 min</q-item-label>
                    <q-icon name="mdi-clock" color="grey" />
                  </q-item-section>
                </q-item>
                <q-separator spaced inset="item-thumbnail" style="margin-left:9.3%"/>

                <q-item clickable v-ripple>
                  <q-item-section avatar thumbnail>
                    <q-icon style="left: 40%" color="primary" name="mdi-bell-ring"/>
                  </q-item-section>
                  <q-item-section class="row justify-center">
                    <q-item-label class="truncateToolongText" title="Le D'click N°6 a une anomalie batterie. Un technicien se rend sur place.">Le D'click N°6 a une anomalie batterie. Un technicien se rend sur place.</q-item-label>
                    <q-item-label caption lines="1"> Catégorie : Maintenance</q-item-label>
                  </q-item-section>
                  <q-item-section side top>
                    <q-item-label caption>Il y a 5 min</q-item-label>
                    <q-icon name="img:statics/wrench-clock.svg" class="filter-grey"/>
                  </q-item-section>
                </q-item>
                <q-separator spaced inset="item-thumbnail" style="margin-left:9.3%"/>

                <q-btn style="left:33%; margin-top:1.2%; margin-bottom:1.2%" unelevated rounded color="primary" label="VOIR LES NOTIFICATIONS" to="/seenotifications"  thumbnail />



              </q-list>
            </q-menu>
          </q-btn>
          <q-btn flat round color="white" icon="mdi-account-circle">
            <!-- <img src="~assets/followThisOne.svg" /> -->
            <q-menu
              transition-show="jump-down"
              transition-hide="jump-up"
            >
              <div class="row no-wrap q-pa-md" style="padding-bottom: 4px">
                <div class="line align-center">
                  <div class="text-h6 q-mb-md">Suivez-nous :</div>
                  <q-btn flat round color="primary" icon="fab fa-twitter" href="https://twitter.com/midipilem" target="_blank"></q-btn>
                  <q-btn flat round color="primary" icon="fab fa-facebook-f" href="https://www.facebook.com/midipilemobility/" target="_blank"></q-btn>
                  <q-btn flat round color="primary" icon="fab fa-instagram" href="https://www.instagram.com/midipilemobility/" target="_blank"></q-btn>
                  <q-btn flat round color="primary" icon="fab fa-linkedin-in" href="https://fr.linkedin.com/company/midipile-mobility" target="_blank"></q-btn>
                </div>

                <q-separator vertical inset class="q-mx-lg" />

                <div class="column items-center">
                  <q-avatar size="36px">
                    <img src="https://cdn.quasar.dev/img/avatar4.jpg">
                  </q-avatar>

                  <div class="text-subtitle1 q-mt-md q-mb-xs"><a href="/profile" class="linkProfile">Profil</a></div>

                  <q-btn
                    flat round color="primary"
                    icon="mdi-power"
                    @click="confirm = true"
                  />

                </div>
              </div>
            </q-menu>
          </q-btn>


          <q-dialog v-model="confirm">
            <q-card>
              <q-card-section class="row items-center">
                <q-avatar icon="warning" color="primary" size="4rem" text-color="white" />
                <span class="q-ml-sm">Êtes-vous sûr de vouloir vous déconnectez ?</span>
              </q-card-section>

              <q-card-actions align="right">
                <q-btn flat label="Annuler" color="primary" v-close-popup />
                <q-btn flat label="Confirmer" color="primary" to= "/" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
    >
    <!-- <q-img src="statics/logo_valide_paysage.jpg"></q-img> -->
    <q-list>
        <q-item-label
          header
        >
          Demo 2022
        </q-item-label>

        <q-item to="/dashboardjson" exact>
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>

          <q-item-section>
            Tableau de bord
          </q-item-section>
        </q-item>

        <q-expansion-item icon="bike_scooter" label="Mes véhicules" to="/mesvehicules" >
          <q-list dense >
            <q-item to="/midipile01" exact>
              <q-item-section > </q-item-section>
              <q-item-section > Midipile 01 </q-item-section>
              <q-item-section > </q-item-section>
            </q-item>

            <q-item to="/midipile02" exact>
              <q-item-section > </q-item-section>
              <q-item-section > Midipile 02 </q-item-section>
              <q-item-section > </q-item-section>
            </q-item>

            <q-item to="/midipile03" exact>
              <q-item-section > </q-item-section>
              <q-item-section > Midipile 03 </q-item-section>
              <q-item-section > </q-item-section>
            </q-item>

            <q-item to="/midipile04" exact>
              <q-item-section > </q-item-section>
              <q-item-section > Midipile 04 </q-item-section>
              <q-item-section > </q-item-section>
            </q-item>

            <q-item to="/midipile05" exact>
              <q-item-section > </q-item-section>
              <q-item-section > Midipile 05 </q-item-section>
              <q-item-section > </q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>

        <q-item to="/Administration" exact>
          <q-item-section avatar>
            <q-icon name="manage_accounts" />
          </q-item-section>

          <q-item-section> Administration </q-item-section>
        </q-item>


        <q-expansion-item icon="grid_view" label="Composants" v-if=debug >
          <q-expansion-item
            :header-inset-level="1"
            icon="insights"
            label="Charts"
          >
              <q-item to="columnlabel" exact>
                <q-item-section > Colonne simple </q-item-section>
              </q-item>

              <q-item to="stackedcolumn" exact>
                <q-item-section > Colonne multiple </q-item-section>
              </q-item>

              <q-item to="basiccircle" exact>
                <q-item-section > Cercle simple </q-item-section>
              </q-item>

              <q-item to="batteryradial" exact>
                <q-item-section > Batterie (Radial) </q-item-section>
              </q-item>

              <q-item to="minibatteryradial" exact>
                <q-item-section > Mini Batterie (Radial) </q-item-section>
              </q-item>

              <q-item to="radialbarcustom" exact>
                <q-item-section > Jauge multiple </q-item-section>
              </q-item>

              <q-item to="spark" exact>
                <q-item-section > Indicateur Spark </q-item-section>
              </q-item>

              <q-item to="basicline" exact>
                <q-item-section > Graphe ligne simple </q-item-section>
              </q-item>

              <q-item to="semidonut" exact>
                <q-item-section > Semi donut </q-item-section>
              </q-item>

              <q-item to="jsontwolines" exact>
                <q-item-section > 2 Lines </q-item-section>
              </q-item>

          </q-expansion-item>


          <q-expansion-item
            :header-inset-level="1"
            icon="location_on"
            label="Maps"
          >

            <q-item to="simplemap" exact>
              <q-item-section > Carte simple </q-item-section>
            </q-item>

            <q-item to="iconmap" exact>
              <q-item-section > Carte avec multiple icônes </q-item-section>
            </q-item>

            <q-item to="popupmap" exact>
              <q-item-section > Carte avec popup </q-item-section>
            </q-item>

            <q-item to="polylinemap" exact>
              <q-item-section > Carte avec chemin </q-item-section>
            </q-item>

          </q-expansion-item>

          <q-expansion-item
            :header-inset-level="1"
            icon="table_chart"
            label="Tables"
          >

            <q-item to="tableprogress" exact>
              <q-item-section > Suivi des véhicules </q-item-section>
            </q-item>

            <q-item to="tabletripstat" exact>
              <q-item-section > Statistique trajet </q-item-section>
            </q-item>

            <q-item to="tableactu" exact>
              <q-item-section > Flux d'actualité </q-item-section>
            </q-item>

            <q-item to="tableactive" exact>
              <q-item-section > Etat du parc </q-item-section>
            </q-item>
          </q-expansion-item>

          <q-expansion-item
            :header-inset-level="1"
            icon="dashboard"
            label="Dashboards"
          >

            <q-item to="dashboard1" exact>
              <q-item-section > Dashboard 1 </q-item-section>
            </q-item>

            <q-item to="dashboard2" exact>
              <q-item-section > Dashboard 2 </q-item-section>
            </q-item>

            <q-item to="dashboard3" exact>
              <q-item-section > Dashboard 3 </q-item-section>
            </q-item>

            <q-item to="dashboardjson" exact>
              <q-item-section > Dashboard avec index JSON </q-item-section>
            </q-item>

          </q-expansion-item>

          <q-expansion-item
            :header-inset-level="1"
            icon="bike_scooter"
            label="Trajet M01"
          >

            <q-item to="01trip001" exact>
              <q-item-section > Trajet 001 </q-item-section>
            </q-item>

            <q-item to="01trip002" exact>
              <q-item-section > Trajet 002 </q-item-section>
            </q-item>

            <q-item to="01trip003" exact>
              <q-item-section > Trajet 003 </q-item-section>
            </q-item>
          </q-expansion-item>

        </q-expansion-item>

      </q-list>
    </q-drawer>

    <q-page-container>
        <div class="q-pt-md q-pl-md">
          <ligne-menu></ligne-menu>
        </div>
        <router-view />
    </q-page-container>

      <!--v-bind:style= "[$q.dark==false ? {backgroundColor: 'white'} : {backgroundColor: '#121212'}]" -->
    <!-- footer part -->
    <q-toolbar>
      <q-toolbar-title>
        <div>
          <center>
            <div class="text-overline text-grey-8">MWS v0.1 - Copyright © 2022 - <a href="https://midipile.eu" target="_blank" class="text-grey-8">Midipile Mobility</a></div>
          </center>
        </div>
      </q-toolbar-title>
    </q-toolbar>


  </q-layout>
</template>

<script>

import { defineComponent, defineAsyncComponent, ref } from 'vue';
import { copyToClipboard } from 'quasar';

// copyToClipboard('some text')
//   .then(() => {
//     // success!
//   })
//   .catch(() => {
//     // fail
//   })

export default defineComponent({
  name: 'MainLayout',

  components: {
    LigneMenu: defineAsyncComponent(() => import('components/Menu/LigneMenu.vue')),
    ToggleDarkMode: defineAsyncComponent(() => import ('components/ToggleDarkMode.vue')),
  },


  setup () {
    const leftDrawerOpen = ref(false);
    // const $q = useQuasar();

    // // get status
    // console.log($q.dark.isActive) // true, false

    // // get configured status
    // console.log($q.dark.mode) // "auto", true, false

    // set status
    // $q.dark.set(false) // or false or "auto"
    // // toggle
    // $q.dark.toggle()
    return {
      debug: false,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      alert: ref(false),
      confirm: ref(false),
      pop: ref(false),
      // copySucceeded: ref(false),
      prompt: ref(false),
      address: ref(''),
      // show: ref(false),

    }
  },

  data(){
    return {
      NumberPhoneAssist: "0788137050",
      show: false,
    }
  },
  methods: {

    // handleCopyStatus(status) {
    //   this.copySucceeded = status
    // }

    copyNumberPhone () { // marche
      let NumberPhoneAssistToCopy = document.querySelector('#testing-code')
      NumberPhoneAssistToCopy.setAttribute('type', 'text')
      NumberPhoneAssistToCopy.select()

      try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        // alert('Testing code was copied ' + msg);
        // $(NumberPhoneAssistToCopy).next().text('text copied');
        // setTimeout(function(){$(NumberPhoneAssistToCopy).next().text('');}, 2000);
      } catch (err) {
        alert('Oops, unable to copy');
      }

      /* unselect the range */
      NumberPhoneAssistToCopy.setAttribute('type', 'hidden')
      window.getSelection().removeAllRanges()
    },

    // setTimeout((){
    //   const box = document.getElementById('box');

    //   // 👇️ removes element from DOM
    //   box.style.display = 'none';

    //   // 👇️ hides element (still takes up space on page)
    //   // box.style.visibility = 'hidden';
    // }, 1000); // 👈️ time in milliseconds

    setShow() {
      let msg = document.getElementById('msg');
      this.show = true;
      msg.style.display = "revert";
      setTimeout(() => {
        this.show = false;
        // 👇️ removes element from DOM
        msg.style.display = "none";
      }, 2000);

    },


    // copy(elem){
    //   if($(elem).text()){
    //     var dummy = document.createElement("textarea");
    //       document.body.appendChild(dummy);
    //       dummy.value = $(elem).text();
    //       dummy.select();
    //       document.execCommand("copy");
    //       document.body.removeChild(dummy);
    //   }else{
    //     input  = $(elem).val();
    //     elem.select();//Select the text in the input element
    //     document.execCommand('copy');//copy it
    //   }

    //   $(elem).next().text('text copied');

    //   setTimeout(function(){$(elem).next().text('');}, 2000);
    // }
  },
})
</script>

<style>

/* .back-white {
  background-color: white;
} */

.ma-logo-mobile {
  margin-left: 10px;
  margin-right: 35%;
}

.ma-logo {
  margin-left: 10px;
}

.truncateToolongText{
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
  overflow: hidden !important;
  max-width: 450px;
}

.filter-grey {
  filter: invert(72%) sepia(14%) saturate(0%) hue-rotate(236deg) brightness(85%) contrast(92%);
}

#titleLink::before {
  box-shadow: none;
}

#link a {
  text-decoration: none;
  color: white;

}

#linkLogo a {
  text-decoration: none;
}

.linkProfile {
  text-decoration: none;
  color: white;
}

.linkProfile:hover {
  text-decoration: underline;
  color: #7198be;
}

.changeColor {
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(72deg) brightness(104%) contrast(103%);
}

#card {
  width: 250px;
}

#msg {
  display: none;
}
</style>
