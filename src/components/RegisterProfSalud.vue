<template>

    <div class="registerProfSalud">
        <div class="container_registerProfSalud">
            <h2>Registrar Profesional De La Salud</h2>

            <form class="information" v-on:submit.prevent="processRegisterProfSalud">
                <fieldset class="first_information">
                    <legend class="first_information-legend">Datos Persona</legend>
                    <label for="nombre" id="element-one_one">Nombre:</label>
                    <input type="text" maxlength="100" id="nombre" v-model="persona.nom_per" required="true">
                    <label for="primerApe">Primer Apellido:</label>
                    <input type="text" maxlength="100" id="primerApe" v-model="persona.primerApe_per" required="true">
                    <label for="segundoApe">Segúndo Apellido:</label>
                    <input type="text" maxlength="100" id="segundoApe" v-model="persona.segundoApe_per" required="true">
                    <label for="telefono">Teléfono:</label>
                    <input type="number" id="telefono" v-model="persona.telefono" required="true">
                    <label for="id_documento">Id Documento:</label>
                    <input type="number" min="1" max="4" id="id_documento" v-model="persona.id_doc" required="true">
                    <label for="num_documento">Número Documento:</label>
                    <input type="text" maxlength="100" id="num_documento" v-model="persona.numdoc_per" required="true">
                    <label for="genero">Género:</label>
                    <input type="radio" value="M" id="masculino" name="" v-model="persona.gen_per" required="true">
                    <label class="sex_opt opt-maculino" for="masculino">Maculino</label>
                    <input type="radio" value="F" id="femenino" name="" v-model="persona.gen_per">
                    <label class="sex_opt" for="femenino">Femenino</label>
                </fieldset>

                <fieldset class="second_information">
                    <legend class="second_information-legend">Datos Profesional Salud</legend>
                    <label for="id_especialidad" id="element-one_two">Id Especialidad:</label>
                    <input type="number" min="1" max="2" id="id_especialidad" v-model="persona.prof_salud.id_esp" required="true">
                    <label for="tarj_prof">Tarjeta Profesional:</label>
                    <input type="text" maxlength="50" id="tarj_prof" v-model="persona.prof_salud.tarj_pro" required="true">
                </fieldset>
                <button type="submit" class="register-button"><span id="text_button">Registrar</span></button>
            </form>
        </div>
    </div>

    <div id="register_successful_profSalud">
        <h3>Registro Exitoso!!</h3>
        <img src="../Images/IconoChuloVerde.png" alt="Icono Chulo Verde">
    </div>

    <div id="register_fail">
      <h3>El Documento Ingresado Ya Existente...</h3>
      <img src="../Images/IconoAdvertenciaNaranjado.png" alt="">
    </div>

    <div class="footer">
      <h4>Orlando Castañeda Developer</h4>
      <h3 id="title">Misión TIC 2022</h3>
      <h5>All rights reserved © 2022</h5>
    </div>
</template>

<script>
    import axios from 'axios';

    export default
    {
        name: "RegisterProfSalud",

        data: function()
        {
            return {
                persona:
                {
                    nom_per: "",
                    primerApe_per: "",
                    segundoApe_per: "",
                    telefono: "",
                    id_doc: "",
                    numdoc_per: "",
                    gen_per: "",
                    last_login: (new Date()).toJSON().toString(),
                    prof_salud:
                    {
                        id_esp: "",
                        tarj_pro: ""
                    }
                },
            }
        },

        methods:
        {
            clear_fields: function()
            {
                this.persona.nom_per = ""
                this.persona.primerApe_per = ""
                this.persona.segundoApe_per = ""
                this.persona.telefono = ""
                this.persona.id_doc = ""
                this.persona.numdoc_per = ""
                this.persona.gen_per = ""
                this.persona.prof_salud.id_esp = ""
                this.persona.prof_salud.tarj_pro = ""
            },

            registerSuccessfulProfSalud: function()
            {
                const image_message = document.getElementById("register_successful_profSalud");
                image_message.style.display="block"
                image_message.style.transition=".4s ease all"
                setTimeout(() =>
                {
                    image_message.style.display="none"
                    image_message.style.transition=".4s ease all"
                }, 5000);
            },

            messageDocumentRepeated: function()
            {
                const image_repeated = document.getElementById("register_fail")
                image_repeated.style.display="block"
                image_repeated.style.transition=".4s ease all"
                setTimeout(() =>
                {
                    image_repeated.style.display="none"
                    image_repeated.style.transition=".4s ease all"
                }, 6000)
            },

            processRegisterProfSalud: function()
            {
                axios.post(
                    "https://hosp-en-casa.onrender.com/Crear_prof_salud/",
                    this.persona,
                    {headers: {}}
                )

                .then(() =>
                {
                    this.registerSuccessfulProfSalud()
                    this.clear_fields()
                })

                .catch((error) =>
                {
                    if(error.response.status == "400")
                        this.messageDocumentRepeated()
                });
            },
        }
    }
</script>

<style>
    .container_registerProfSalud h2
    {
        margin: 50px 0 30px 30px;
        color: rgb(68, 68, 68);
        background: rgb(54, 79, 109);
        display: inline-block;
        color: white;
        padding: 10px 20px;
        border: 5px double white;
        border-radius: 6px;
    }

    .information input
    {
        padding: 3px;
        border-radius: 3px;
    }

    .first_information, .second_information
    {
        background: rgb(54, 79, 109);
        border-radius: 10px;
        border: 3px double white;
        margin: 0 30px 0 30px;
    }

    .first_information
    {
        margin-bottom: 20px;
    }

    .sex_opt
    {
        display: inline-block !important;
        margin-bottom: 10px;
    }

    .opt-masculino
    {
        margin-right: 6px !important;
    }

    #femenino
    {
        margin-left: 20px;
    }

    .first_information-legend, .second_information-legend
    {
        background: rgb(54, 79, 109);
        border-radius: 10px;
        color: white;
        font-size: 18px;
        padding: 8px;
        border: 3px double white;
        margin-left: 10px;
    }

    .information label
    {
        color: white;
        display: block;
        margin-top: 12px;
        margin-left: 1px;
    }

    #element-one_one, #element-one_two
    {
        margin-top: 25px;
    }

    #genero, #tarj_prof
    {
        margin-bottom: 18px;
    }

    .register-button
    {
        position: relative;
        display: block;
        margin: auto;
        margin-top: 50px;
        margin-bottom: 80px;
        background: rgb(54, 79, 109);
        color: white;
        font-size: 15px;
        border: 3px inset white;
        border-radius: 8px;
        font-weight: bold;
        transition: .3s ease all;
        height: 40px;
        width: 100px;
        overflow: hidden;
        cursor: pointer;
    }

    .register-button:hover::after
    {
        left: -5px;
    }

    .register-button::after
    {
        position: absolute;
        content: "";
        width: 100px;
        border-right: 40px solid transparent;
        border-bottom: 37px solid rgb(36, 146, 184);
        left: -137px;
        bottom: 0px;
        transition: .3s ease-in-out all;
    }

    .register-button:active
    {
        border: 3px outset white;
    }

    #text_button
    {
        position: relative;
        height: 100%;
        width: 100%;
        transition: .3s ease all;
        z-index: 1;
    }

    #register_successful_profSalud
    {
        position: fixed;
        background: rgba(43, 43, 43, .9);
        right: 0;
        bottom: 0;
        height: 70px;
        width: 265px;
        margin-right: 20px;
        margin-bottom: 20px;
        border-top-left-radius: 40px;
        border-bottom-right-radius: 40px;
        transition: .4s ease all;
        z-index: 2;
        cursor: default;
        display: none;
    }

    #register_successful_profSalud h3
    {
        position: absolute;
        color: rgb(119, 235, 29);
        display: inline-block;
        line-height: 70px;
        margin-left: 20px;
        margin-right: 10px;
        font-size: 20px;
        bottom: -20px;
    }

    #register_successful_profSalud img
    {
        position: absolute;
        width: 48px;
        height: 46px;
        right: 0;
        margin: 10px 20px 10px 5px;
    }

    #register_fail
    {
        position: fixed;
        background: rgba(43, 43, 43, .9);
        right: 0;
        bottom: 0;
        height: 70px;
        width: 440px;
        margin-right: 20px;
        margin-bottom: 20px;
        border-top-left-radius: 40px;
        border-bottom-right-radius: 40px;
        transition: .4s ease all;
        z-index: 2;
        cursor: default;
        display: none;
    }

    #register_fail h3
    {
        position: absolute;
        color: rgb(228, 102, 19);
        display: inline-block;
        line-height: 70px;
        margin-left: 20px;
        margin-right: 5px;
        font-size: 20px;
        bottom: -20px;
    }

    #register_fail img
    {
        position: absolute;
        width: 48px;
        height: 46px;
        right: 0;
        margin: 10px 20px 10px 5px;
    }

    .footer
    {
        position: relative;
        width: 100%;
        height: 100px;
        padding: 15px 20px !important;
        background: rgb(58, 58, 58);
        border-top: 4px double white;
        box-sizing: border-box;
    }

    .footer h4, h5
    {
        position: absolute;
        margin: 0;
        color: white;
        display: inline-block;
    }

    .footer h5
    {
        bottom: 15px;
    }

    #title
    {
        position: absolute;
        color: white;
        font-size: 18px;
        right: 0;
        margin-right: 6px;
        bottom: 0;
    }
</style>