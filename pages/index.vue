<template>
  <div class="container">
    <!-- <nuxt-link to="/" class="title">Political Awareness Platform</nuxt-link> -->
    <p
      class="platform-purpose"
    >This platform created to heal the relationship problem between citizens and politicians / political parties. Hopefully, this platform may help citizens and political parties to understand each other better.</p>

    <br />

    <h3>Goal I</h3>
    <p
      class="goal-text"
    >Understanding each party's purpose. Most of the citizens can only name a few political parties however there are ususaly more than thier acknowlegde registered parties to vote on. Therefore, this platform aims to help citizens to get to know every single option when it comes to voting. Many people do not like politics and do not feel like voting for any party at all because they do not like the popular parties or do not know of the unpopular parties because of the media influence. Therefore, in this platform every party will be portrayed equally and hopefully, citizens will gain access to knowledge of not well-known parties as well.</p>
<br>
    <h3>Goal II</h3>
    <p
      class="goal-text"
    >This platform also aims to find out what people think about each party, positively and negatively. Therefore we can see what parties good and bad at according to the citizens. Then we can easily compare parties, and politicians can also understand what citizens think about them in general.</p>
<br>
    <h3>Goal III</h3>
    <p
      class="goal-text"
    >Eventually, this platform will also help citizens to express their ideas or desires from an imaginary political party, what to focus on, and what to avoid the most. Therefore, political parties can see what citizens care about the most and the least.</p>

    <h4 class="subtitle">Available Countries</h4>
    <div class="links">
      <nuxt-link to="/turkey" class="button--green">Türkiye</nuxt-link>
      <nuxt-link to="/germany" class="button--green">Deutschland</nuxt-link>
    </div>
    <Authentication />

    <p style="margin-top: 3em">We are unleashing the power of the technology and human ingenuity to achieve new victories in the fight against knotty democracy. Join us and have a global impact.</p>
  </div>
</template>

<script>
export default {
  data() {
    return { 

     }
  }

}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
.container {
  margin: auto;
  min-height: 100vh;
  text-align: center;
  max-width: 900px;
  padding:0 10px;
}

.platform-purpose {
  max-width: 900px;
  text-align: center;
  margin: 2em auto;
  font-family: 'Quicksand';
  font-size: 1em;
  font-weight: 500;
  color: #2d333f;
  word-spacing: 2px;

  @media only screen and (max-width: 600px) {
      text-align: left;
    }
}

.subtitle {
  font-weight: 300;
  font-size: 2em;
  color: #526488;
  word-spacing: 5px;
  margin-bottom: 0;
}

.links {
  padding: 15px 0;
}

.goal-text {
  text-align: left;
  color: #1d2129;
  word-spacing: 2px;
  font-size: 1em;
  font-family: 'Quicksand';
  font-weight: 400;
  color: #2d333f;
  word-spacing: 2px;
  margin: 0;
}

h3 {
  text-align: left;
  margin: 0px;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
