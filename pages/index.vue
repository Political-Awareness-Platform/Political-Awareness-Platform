<template>
  <div class="container">
    <div class="intro">
      <h3>
        This platform created to heal the relationship problem between citizens
        and politicians / political parties. Hopefully, this platform may help
        citizens and political parties to understand each other better.
      </h3>
      <br />
      <h4>Goal I</h4>
      <p>
        Understanding each party's purpose. Most of the citizens can only name a
        few political parties however there are ususaly more than thier
        aknowlegde registered parties to vote on. Therefore, this platform aims
        to help citizens to get to know every single option when it comes to
        voting. Many people do not like politics and do not feel like voting for
        any party at all because they do not like the popular parties or do not
        know of the unpopular parties because of the media influence. Therefore,
        in this platform every party will be portrayed equally and hopefully,
        citizens will gain access to knowledge of not well-known parties as
        well.
      </p>
      <br />
      <h4>Goal II</h4>
      <p>
        This platform also aims to find out what people think about each party,
        positively and negatively. Therefore we can see what parties good and
        bad at according to the citizens. Then we can easily compare parties,
        and politicians can also understand what citizens think about them in
        general.
      </p>
      <br />
      <h4>Goal III</h4>
      <p>
        Eventually, this platform will also help citizens to express their ideas
        or desires from an imaginary political party, what to focus on, and what
        to avoid the most. Therefore, political parties can see what citizens
        care about the most and the least.
      </p>
    </div>
    <section class="party-card-section">
      <div class="party-card">
        <nuxt-link to="/turkey">
          <img src="~/assets/flags/tr.svg" /> <br>
          <b>Turkiye</b>
        </nuxt-link>
      </div>
      <div class="party-card">
        <nuxt-link to="/germany">
          <img src="~/assets/flags/de.svg" /> <br>
          <b>Deutschland</b>
        </nuxt-link>
      </div>
    </section>
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from '@/components/TheFooter.vue'
export default {
  components: {TheFooter},
  transition: 'page'
}
</script>

<style lang="scss" scoped>
.container {
  margin: 20px auto;
  padding: 10px;
  max-width: 1000px;

  .intro {
    line-height: 25px;

    h3 {
      text-align: center;
    }
  }

  .countries {
    padding-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: row wrap;
    align-items: center;
    justify-content: center;

    margin: 5px;
    padding: 15px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
    a {
      text-decoration: none;
    }
  }

  .party-card-section {
    display: flex;
    flex-direction: row wrap;
    justify-content: center;
    align-items: stretch;

    .party-card {
      margin: 5px;
      padding: 15px;
      border-radius: 10px;
      text-align: center;
      box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
      a {
        text-decoration: none;
      }

      img {
        width: 100px;
        height: 100px;
      }
    }
  }
}
</style>
