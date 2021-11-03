<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center">
        <q-card
          class="login-form"
          v-bind:style="
            $q.platform.is.mobile ? { width: '80%' } : { width: '50%' }
          "
        >
          <q-img
            src="/statics/images/midipile.jpg"
          />

          <q-card-section>
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">
                Accès au tableau de bord Midipile
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input filled v-model="username" label="Utilisateur" lazy-rules />

              <q-input
                type="password"
                filled
                v-model="password"
                label="Mot de passe"
                lazy-rules
              />

              <div>
                <q-btn
                  label="Entrer"
                  to="/index"
                  type="button"
                  color="primary"
                />

              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script type="text/javascript"></script>
<script>
export default {
        data() {
            return {
                username: 'admin',
                password: 'Admin@CRM'
            }
        },
}
</script>

<style>
.login-form {
  position: absolute;
}
</style>
