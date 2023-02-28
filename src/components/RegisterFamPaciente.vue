<template>

    <div class="registerProfSalud">
        <div class="container_registerProfSalud">
            <h2>Registrar Familiar De Paciente</h2>

            <form class="information" v-on:submit.prevent="processRegisterFamPaciente">
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
                    <select id="id_document">
                        <option value="1">Cédula de ciudadanía</option>
                        <option value="2">Tarjeta de identidad</option>
                        <option value="3">Cédula de extranjería</option>
                        <option value="4">Número de pasaporte</option>
                    </select>
                    <label for="num_documento">Número Documento:</label>
                    <input type="text" maxlength="100" id="num_documento" v-model="persona.numdoc_per" required="true">
                    <label for="genero">Género:</label>
                    <input type="radio" value="M" id="masculino" name="" v-model="persona.gen_per" required="true">
                    <label class="sex_opt opt-maculino" for="masculino">Maculino</label>
                    <input type="radio" value="F" id="femenino" name="" v-model="persona.gen_per">
                    <label class="sex_opt" for="femenino">Femenino</label>
                </fieldset>

                <fieldset class="second_information">
                    <legend class="second_information-legend">Datos Familiar Paciente</legend>
                    <label for="parentesco" id="element-one_two">Parentesco:</label>
                    <input type="text" maxlength="40" id="parentesco" v-model="persona.fami_pac.paren_fam" required="true">
                    <label for="email">Correo Electrónico:</label>
                    <input type="email" id="email" v-model="persona.fami_pac.email_fam" required="true">
                </fieldset>
                <button type="submit" class="register-button"><span id="text_button">Registrar</span></button>
            </form>
        </div>
    </div>

    <div id="register_successful_family">
        <h3>Registro Exitoso!!</h3>
        <img src="../Images/IconoChuloVerde.png" alt="Icono Chulo Verde">
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
        name: "RegisterFamPaciente",

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
                    fami_pac:
                    {
                        paren_fam: "",
                        email_fam: ""
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
                this.persona.fami_pac.paren_fam = ""
                this.persona.fami_pac.email_fam = ""
            },

            registerSuccessfulFamily: function()
            {
                const image_message = document.getElementById("register_successful_family");
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

            processRegisterFamPaciente: function()
            {
                axios.post(
                    "https://hosp-en-casa.onrender.com/Crear_familiar_paciente/",
                    this.persona,
                    {headers: {}}
                )

                .then(() =>
                {
                    this.registerSuccessfulFamily()
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
    #email
    {
        margin-bottom: 18px;
    }

    #register_successful_family
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

    #register_successful_family h3
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

    #register_successful_family img
    {
        position: absolute;
        width: 48px;
        height: 46px;
        right: 0;
        margin: 10px 20px 10px 5px;
    }
</style>