<template>

  <q-page padding>
    <q-card style="width: 100%">
      <div class="row justify-center">
        <h4 > Créer une alerte </h4>
      </div>
    <q-item style="padding-bottom:5%;">
      <q-item-section class="col">
        <div class="flex flex-center">
          <q-btn style="width:200px;" rounded color="primary" label="Ajouter une alerte" to="/addalerts"/>
        </div>
      </q-item-section>

      <!-- <q-item-section class="col">
        <div class="flex flex-center">
        <q-btn style="width:200px;"  rounded color="primary" label="Supprimer une alerte" to="/addalerts"/>
        </div>
      </q-item-section>
      <q-item-section class="col">
        <div class="flex flex-center">
        <q-btn style="width:200px;"  rounded color="primary" label="Modifier une alerte" to="/addalerts"/>
        </div>
      </q-item-section> -->
    </q-item>
    <q-separator/>
    <q-item clickable style="padding-top: 2%;" v-ripple>
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

    </q-card>

  </q-page>
</template>
