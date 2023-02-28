<template>
  <div id="app" class="app">
    <div class="header">
      <div class="title">
        <h1>Hospitalización en casa</h1>
        <h3>Perfil Auxiliar</h3>
      </div>

      <div class="line"></div>

      <div class="menu">
        <nav clas="menu_navegation">
          <div class="menu_navegation-button" v-if="button_home">
            <button id="button-primary" v-on:click="loadMainPage">Inicio</button>
          </div>
          <div class="menu_navegation-sub_menu">
            <ul class="menu_navegation-sub_menu-primary">  
              <li class="list-one"><button id="button-one">Registros</button>
                <ul class="menu_navegation-sub_menu-list">
                  <li><button v-on:click="loadRegisterProfSalud">Registrar Profesional Salud</button></li>
                  <li><button v-on:click="loadRegisterFamPatient">Registrar Familiar Paciente</button></li>
                  <li><button v-on:click="loadRegisterPatient">Registrar Paciente</button></li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="menu_navegation-sub_menu_two">
            <ul class="menu_navegation-sub_menu-secondary">
              <li><button id="button-two">Ver Información</button>
                <ul class="menu_navegation-sub_menu_two-list">
                  <li><button v-on:click="loadInformationAllPatients">Ver Pacientes Registrados</button></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>

    <div  class="main-component">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',

    data: function()
    {
      return {
        mainComponent: false,
        button_home: false,
      }
    },

    components:
    {
    },

    methods:
    {
      loadMainPage: function()
      {
        this.button_home = false,
        this.$router.push({name: "mainPage"})
      },

      loadRegisterProfSalud: function()
      {
        this.button_home = true
        this.$router.push({name: "registerProfSalud"})
      },

      loadRegisterFamPatient: function()
      {
        this.button_home = true
        this.$router.push({name: "registerFamPaciente"})
      },

      loadRegisterPatient: function()
      {
        this.button_home = true
        this.$router.push({name: "registerPatient"})
      },

      loadInformationAllPatients: function()
      {
        this.button_home = true
        this.$router.push({name: "informationPatient"})
      },
    },

    created: function()
    {
      this.loadMainPage()
    }
  }
</script>

<style>
  body
  {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }

  .header
  {
    position: relative;
    margin: 0;
    padding: 0;
    width: 100%;
    justify-content: space-between;
    display: block;
    background: rgb(54, 79, 109);
    border-bottom-right-radius: 25%;
    border-bottom: 1px solid white;
    box-shadow: -5px 6px 8px rgba(0, 0, 0, .8);
    z-index: 1;
  }

  .title
  {
    display: block;
    padding: 15px;
  }

  .title h1
  {
    margin: 0;
    height: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: white;
    text-shadow: 1px 1px 2px snow;
    display: inline-block;
  }

  .title h3
  {
    position: absolute;
    margin: 0;
    margin-top: 10px;
    right: 0;
    display: inline-block;
    color: white;
    font-size: 21px;
    letter-spacing: 1.3px;
    padding: 0 15px 0 0;
  }

  .line
  {
    border-top: 4px double #ffffff;
  }

  .menu
  {
    position: relative;
    width: 100%;
    text-align: center;
    padding: 15px  0 8px 0;
  }

  .menu_navegation
  {
    position: absolute;
    display: inline-block;
    width: 100%;
  }

  .menu_navegation-button
  {
    margin: 0;
    margin-right: 20px;
    width: 150px;
    display: inline-block;
  }

  #button-primary, #button-one, #button-two
  {
    background: transparent;
    font-size: 17px;
    color: white;
    font-weight: bold;
    padding: 10px 17px;
    border: none;
    border-top: 1.9px solid transparent;
    border-bottom: 1.9px solid transparent;
    border-radius: 4px;
    transition: .4s ease all;
    cursor: pointer;
    width: 100%;
    display: inline-block;
  }

  #button-primary:hover, #button-one:hover, #button-two:hover
  {
    border-top: 1.9px solid white;
    border-bottom: 1.9px solid white;
    border-radius: 4px;
    background: rgba(215, 215, 215, .1);
  }

  .menu_navegation-sub_menu
  {
    position: absolute;
    width: 240px;
    position: relative;
    margin: auto;
    margin-right: 20px;
    display: inline-block;
  }

  .menu_navegation-sub_menu-primary, .menu_navegation-sub_menu-secondary
  {
    list-style-type: none;
    padding: 0;
    margin: 4px;
    width: 100%;

  }

  .menu_navegation-sub_menu-list
  {
    position: absolute;
    width: 100%;
    height: 152px;
    background: rgb(54, 79, 109);
    margin: 0;
    padding: 5px;
    list-style-type: none;
    padding: 0;
    border-radius: 4px;
    box-shadow: 4px 3px 4px white;
    top: 46px;
    display: none;
    transition: all 4s ease;
    z-index: 1;
  }

  .menu_navegation-sub_menu-primary li
  {
    width: 100%;
  }

  .menu_navegation-sub_menu-primary li:hover .menu_navegation-sub_menu-list
  {
    display: block;
  }

  .menu_navegation-sub_menu-list button
  {
    width: 90%;
    margin: 0;
    margin-top: 10px;
    padding: 8px;
    border: none;
    border-bottom: 1.9px solid rgb(54, 79, 109);
    background: rgb(54, 79, 109);
    font-size: 16px;
    color: white;
    border-radius: 4px;
    transition: .4s;
    cursor: pointer;
  }

  .menu_navegation-sub_menu-list button:hover
  {
    border-bottom: 1.9px solid white;
  }

  .menu_navegation-sub_menu_two
  {
    position: absolute;
    width: 230px;
    position: relative;
    margin: auto;
    display: inline-block;
  }

  .menu_navegation-sub_menu_two-list
  {
    position: absolute;
    width: 100%;
    height: 60px;
    display: none;
    background: rgb(54, 79, 109);
    margin: 0;
    list-style-type: none;
    padding: 0;
    border-radius: 4px;
    box-shadow: 4px 3px 4px white;
    top: 46px;
    transition: all 4s ease;
  }

  .menu_navegation-sub_menu-secondary li:hover .menu_navegation-sub_menu_two-list
  {
    display: block;
  }

  .menu_navegation-sub_menu_two-list button
  {
    width: 90%;
    margin: 0;
    margin-top: 10px;
    padding: 8px;
    border: none;
    border-bottom: 1.9px solid rgb(54, 79, 109);
    background: rgb(54, 79, 109);
    font-size: 16px;
    color: white;
    border-radius: 4px;
    transition: .4s;
    cursor: pointer;
  }

  .menu_navegation-sub_menu_two-list button:hover
  {
    border-bottom: 1.9px solid white;
  }
</style>