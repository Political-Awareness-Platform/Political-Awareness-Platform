<template>
  <div>
    <div>
      <p>Turkiye</p>
    </div>
    <div>
      <br />
      <p>
        Faliyette olan parti sayisi / Active Parties number
      </p>
      <br />

      <li>Meclisteki parti sayisi / Number of the parties in parlament</li>
      <li>Secmen sayisi / Voter count</li>
      <li>Secime katilim yuzdesi / Contibution percentage</li>
    </div>
    <hr />
    <section>
      <h2>Parti Kartlari / Party cards</h2>
      <br />
      <nuxt-link to="/turkey/demokratparti"> demokrat parti </nuxt-link><br />
    </section>
    <hr />
    <section>
      <h2>Ideal Parti Bolumu / Ideal Party Section</h2>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  fetch() {}
};
</script>

<style></style>
