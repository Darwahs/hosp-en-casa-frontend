<template>
    <section class="section-info-patients">
        <div class="section_div-one_title">
            <h1>Pacientes Registrados</h1>
        </div>

        <div class="section_div-two">
            <table class="section_div-two_table">
                <thead class="section_div-two_table_head">
                    <tr>
                        <th id="sticky">Paciente</th>
                        <th class="width-one sticky2">Nombre</th>
                        <th class="width-one">Primer_apellido</th>
                        <th class="width-one">Segundo_apellido</th>
                        <th>Teléfono</th>
                        <th class="width-two">Documento</th>
                        <th>Número_doc</th>
                        <th>Sexo</th>
                        <th>Fecha_nacimiento</th>
                        <th>Rh</th>
                        <th class="color">Familiar</th>
                        <th class="width-four color_prof_salud">Prof_salud</th>
                        <th class="width-three">Dirección</th>
                        <th>Departamento</th>
                        <th>Ciudad</th>
                        <th class="width-two">Longitud</th>
                        <th class="width-two">Latitud</th>
                    </tr>
                </thead>
                <tbody class="section_div-two_table_body">
                    <tr class="patient" v-for="patient in patients">
                        <td class="sticky bold-letter">{{patient.id_pac.id}}</td>
                        <td class="sticky2 width-one">{{patient.id_pac.nom_per}}</td>
                        <td>{{patient.id_pac.primerApe_per}}</td>
                        <td>{{patient.id_pac.segundoApe_per}}</td>
                        <td>{{patient.id_pac.telefono}}</td>
                        <td>{{patient.id_pac.id_doc}}</td>
                        <td>{{patient.id_pac.numdoc_per}}</td>
                        <td>{{patient.id_pac.gen_per}}</td>
                        <td>{{patient.fech_nac}}</td>
                        <td>{{patient.rh_pac}}</td>
                        <td class="width-two">{{patient.id_fam.id_fam.nom_per+' '+patient.id_fam.id_fam.primerApe_per}}</td>
                        <td>{{patient.id_pro}}</td>
                        <td>{{patient.dir_pac}}</td>
                        <td>{{patient.id_ciudad.id_dep.nom_dep}}</td>
                        <td>{{patient.id_ciudad.nom_ciudad}}</td>
                        <td>{{patient.lon_pac}}</td>
                        <td>{{patient.lat_pac}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>

    <section class="section_see-patient">
        <div class="section_see-patient_title">
            <h1>Buscar Paciente</h1>
        </div>

        <div class="fieldset_input-information">
            <fieldset class="input-information">
                <legend class="input-information_legend">Ingrese Id Paciente</legend>
                <div class="input-id">
                    <img src="../Images/IconoId.png">
                    <input type="number" id="input-number" v-model="get_id" required="true">

                    <div class="button">
                        <div class="button_button">
                            <button class="button-search" v-on:click="getPatient">
                                <span id="text-button">Buscar</span>
                            </button>
                        </div>
                    </div>
                </div>
            </fieldset>
        </div>

        <div class="tables">
            <div class="section_see-patient_div-two">
                <table class="section_see-patient_div-two_table">
                    <thead>
                        <tr>
                            <th class="style_text width-dinamic">Paciente</th>
                            <th class="style_text width-dinamic">Información</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td class="style_text width-dinamic">Id</td>
                            <td v-if="!answer"></td>
                            <td v-if="answer">{{patient.id_pac.id}}</td>
                        </tr>
                        <tr>
                            <td class="style_text width-dinamic">Nombre</td>
                            <td v-if="!answer"></td>
                            <td v-if="answer">{{patient.id_pac.nom_per}}</td>
                        </tr>
                        <tr>
                            <td class="style_text width-dinamic">Primer_apellido</td>
                            <td v-if="!answer"></td>
                            <td v-if="answer">{{patient.id_pac.primerApe_per}}</td>
                        </tr>
                        <tr>
                            <td class="style_text width-dinamic">Segundo_apellido</td>
                            <td v-if="!answer"></td>
                            <td v-if="answer">{{patient.id_pac.segundoApe_per}}</td>
                        </tr>
                        <tr>
                            <td class="style_text width-dinamic">Teléfono</td>
                            <td v-if="!answer"></td>
                            <td v-if="answer">{{patient.id_pac.telefono}}</td>
                        </tr>
                        <tr>
                            <td class="style_text width-dinamic">Documento</td>
                            <td v-if="!answer"></td>
                            <td v-if="answer">{{patient.id_pac.id_doc}}</td>
                        </tr>
                        <tr>
                            <td class="style_text width-dinamic">Número_doc</td>
                            <td v-if="!answer"></td>
                            <td v-if="answer">{{patient.id_pac.numdoc_per}}</td>
                        </tr>
                        <tr>
                            <td class="style_text width-dinamic">Sexo</td>
                            <td v-if="!answer"></td>
                            <td v-if="answer">{{patient.id_pac.gen_per}}</td>
                        </tr>
                        <tr>
                            <td class="style_text width-dinamic">Fecha_nacimiento</td>
                            <td v-if="!answer"></td>
                            <td v-if="answer">{{patient.fech_nac}}</td>
                        </tr>
                        <tr>
                            <td class="style_text width-dinamic">Rh</td>
                            <td v-if="!answer"></td>
                            <td v-if="answer">{{patient.rh_pac}}</td>
                        </tr>
                        <tr>
                            <td id="color-prof_salud">Prof_salud</td>
                            <td v-if="!answer"></td>
                            <td v-if="answer">{{patient.id_pro}}</td>
                        </tr>
                        <tr>
                            <td class="style_text width-dinamic">Dirección</td>
                            <td v-if="!answer"></td>
                            <td v-if="answer">{{patient.dir_pac}}</td>
                        </tr>
                        <!------------------------------------------------------------------------>
                        <tr>
                            <td class="style_text width-dinamic">Departamento</td>
                            <td v-if="!answer"></td>
                            <td v-if="answer">{{patient.id_ciudad.id_dep.nom_dep}}</td>
                        </tr>
                        <tr>
                            <td class="style_text width-dinamic">Ciudad</td>
                            <td v-if="!answer"></td>
                            <td v-if="answer">{{patient.id_ciudad.nom_ciudad}}</td>
                        </tr>
                        <!------------------------------------------------------------------------>
                        <tr>
                            <td class="style_text width-dinamic">Longitud</td>
                            <td v-if="!answer"></td>
                            <td v-if="answer">{{patient.lon_pac}}</td>
                        </tr>
                        <tr>
                            <td class="style_text width-dinamic">Latitud</td>
                            <td v-if="!answer"></td>
                            <td v-if="answer">{{patient.lat_pac}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="section_see-patient_div-three">
                <table class="section_see-patient_div-three_table">
                    <thead>
                        <tr>
                            <th class="style_text width-dinamic">Familiar</th>
                            <th class="style_text width-dinamic">Información</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td class="style_text width-dinamic">Id</td>
                            <td v-if="!answer"></td>
                            <td v-if="answer">{{patient.id_fam.id_fam.id}}</td>
                        </tr>
                        <tr>
                            <td class="style_text width-dinamic">Nombre</td>
                            <td v-if="!answer"></td>
                            <td v-if="answer">{{patient.id_fam.id_fam.nom_per}}</td>
                        </tr>
                        <tr>
                            <td class="style_text width-dinamic">Primer_apellido</td>
                            <td v-if="!answer"></td>
                            <td v-if="answer">{{patient.id_fam.id_fam.primerApe_per}}</td>
                        </tr>
                        <tr>
                            <td class="style_text width-dinamic">Segundo_apellido</td>
                            <td v-if="!answer"></td>
                            <td v-if="answer">{{patient.id_fam.id_fam.segundoApe_per}}</td>
                        </tr>
                        <tr>
                            <td class="style_text width-dinamic">Teléfono</td>
                            <td v-if="!answer"></td>
                            <td v-if="answer">{{patient.id_fam.id_fam.telefono}}</td>
                        </tr>
                        <tr>
                            <td class="style_text width-dinamic">Documento</td>
                            <td v-if="!answer"></td>
                            <td v-if="answer">{{patient.id_fam.id_fam.id_doc}}</td>
                        </tr>
                        <tr>
                            <td class="style_text width-dinamic">Número_doc</td>
                            <td v-if="!answer"></td>
                            <td v-if="answer">{{patient.id_fam.id_fam.numdoc_per}}</td>
                        </tr>
                        <tr>
                            <td class="style_text width-dinamic">Sexo</td>
                            <td v-if="!answer"></td>
                            <td v-if="answer">{{patient.id_fam.id_fam.gen_per}}</td>
                        </tr>
                        <tr>
                            <td class="style_text width-dinamic">Parentesco</td>
                            <td v-if="!answer"></td>
                            <td v-if="answer">{{patient.id_fam.paren_fam}}</td>
                        </tr>
                        <tr>
                            <td class="style_text width-dinamic">Email</td>
                            <td v-if="!answer"></td>
                            <td v-if="answer">{{patient.id_fam.email_fam}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <div class="footer">
        <h4>Orlando Castañeda Developer</h4>
        <h3 id="title">Misión TIC 2022</h3>
        <h5>All rights reserved © 2022</h5>
    </div>
</template>

<script>
import axios from 'axios'

    export default
    {
        name: "InformationPatient",

        data: function()
        {
            return {
                patients: [],
                get_id: "",
                patient: [],
                answer: false,
            }
        },
        
        created()
        {
            axios.get('https://hosp-en-casa.onrender.com/Paciente/')
            .then(response => this.patients = response.data.Pacientes)
            .catch((error) =>
            {
                if (error.response.staus == "404")
                    alert("ERROR 404: Pacientes No Encontrados")
            })
        },

        methods:
        {
            getPatient: async function()
            {
                axios.get(`https://hosp-en-casa.onrender.com/Paciente/${this.get_id}`)
                .then((response) => 
                {
                    this.patient = response.data.Paciente,
                    this.answer = true
                })
                .catch((error) =>
                {
                    if (error.response.staus == "404")
                        alert("ERROR 404: Paciente No Encontrado")
                })
            },
        }
    }
</script>

<style>
    .section-info-patients
    {
        width: 100%;
    }

    .section_div-one_title
    {
        text-align: center;
        margin-top: 60px;
    }

    .section_div-one_title h1
    {
        margin: 0;
        background: rgb(54, 79, 109);
        display: inline-block;
        color: white;
        font-size: 30px;
        padding: 20px 40px;
        border: 5px double white;
        border-radius: 30px;
    }

    .section_div-two
    {
        background: rgb(54, 79, 109);
        margin: 30px;
        max-width: 100%;
        border: 4px double white;
        border-radius: 12px;
        overflow-x: scroll;
    }

    .section_div-two_table
    {
        color: white;
        text-align: center;
        border-spacing: 0;
    }

    .width-one
    {
        min-width: 130px;
    }

    .width-two
    {
        min-width: 160px;
    }

    .width-three
    {
        min-width: 200px;
    }

    .width-four
    {
        min-width: 250px;
    }

    .section_div-two_table_head th
    {
        border: 1px solid white;
        padding: 18px 20px;
        background: rgb(158, 46, 21);
    }

    .color
    {
        background: rgb(0, 176, 102) !important;
        width: 300px;
    }

    .color_prof_salud
    {
        background: rgb(226, 97, 25) !important;
    }

    .section_div-two_table td
    {
        border: 1px solid white;
        padding: 18px 20px;
    }

    .bold-letter
    {
        font-weight: bold;
    }

    #sticky
    {
        position: sticky;
        left: 0;
    }

    .sticky
    {
        position: sticky;
        left: 0;
        background: rgb(54, 79, 109);
    }

    .sticky2
    {
        position: sticky;
        left: 99.084px;
        background: rgb(54, 79, 109);
    }

    .section_see-patient_title
    {
        text-align: center;
        margin: 100px 0 70px 0;
    }

    .section_see-patient_title h1
    {
        background: rgb(54, 79, 109);
        display: inline-block;
        color: white;
        font-size: 30px;
        padding: 20px 40px;
        border: 5px double white;
        border-radius: 30px;
        margin: 0;
    }

    .input-information
    {
        background: rgb(54, 79, 109);;
        border: 4px double white;
        border-radius: 14px;
        padding: 0;
        width: 280px;
        height: 170px;
        margin: auto;
    }

    .input-information_legend
    {
        background: rgb(54, 79, 109);;
        border: 4px double white;
        border-radius: 18px;
        text-align: center;
        color: white;
        padding: 8px 15px;
    }

    .input-label
    {
        display: block;
        font-weight: bold;
        text-align: center;
        color: rgb(54, 79, 109);
    }

    .input-id
    {
        position: relative;
        text-align: center;
        margin: 10px 0;
    }

    .input-id img
    {
        position: absolute;
        display:inline-block;
        width: 18px;
        height: 18px;
        border-right: 1.5px solid rgb(87, 86, 85);
        margin: 5.5px;
        padding-right: 4px;
    }

    .input-id input
    {
        padding: 4px 4px 4px 32px;
        border: 3px double rgb(54, 79, 109);
        border-radius: 6px;
        font-size: 13px;
    }

    .button
    {
        margin-top: 40px;
        text-align: center;
    }

    .button_button
    {
        display: inline-block;
        border-radius: 8px;
        height: 35px;
        width: 80px;
    }

    .button-search
    {
        position: relative;
        display: block;
        background: rgb(54, 79, 109);
        color: white;
        font-weight: bold;
        border: 3px inset white;
        border-radius: 8px;
        transition: .3s ease all;
        height: 35px;
        width: 80px;
        overflow: hidden;
        cursor: pointer;
    }

    .button button:hover::after
    {
        right: -37px;
        transition: .3s ease-in-out all;
    }

    .button button::after
    {
        position: absolute;
        content: "";
        width: 100px;
        border-right: 40px solid transparent;
        border-bottom: 37px solid rgb(36, 146, 184);
        right: 82px;
        bottom: 0px;
        transition: .3s ease-in-out all;
    }

    .button button:active
    {
        border: 3px outset white;
    }

    #text-button
    {
        position: relative;
        height: 100%;
        width: 100%;
        transition: .3s ease all;
        z-index: 1;
    }

    .tables
    {
        text-align: center;
        margin-top: 50px;
    }

    .section_see-patient_div-two, .section_see-patient_div-three
    {
        position: relative;
        display: inline-block;
        border: 4px double rgb(54, 79, 109);
        border-radius: 12px;
        overflow: hidden;
    }

    .section_see-patient_div-three
    {
        margin: 0 0 230px 30px;
    }

    .section_see-patient_div-two_table, .section_see-patient_div-three_table
    {
        color: white;
        border-spacing: 0;
        border-radius: 12px;
        background: rgb(54, 79, 109);
    }

    .section_see-patient_div-two_table th, .section_see-patient_div-two_table td,
    .section_see-patient_div-three_table th, .section_see-patient_div-three_table td
    {
        width: 180px;
        border: 1px solid white;
        padding: 15px 17px;
        box-sizing: border-box;
    }

    .section_see-patient_div-two_table .style_text
    {
        font-weight: bold;
        background: rgb(158, 46, 21);
    }

    #color-prof_salud
    {
        background: rgb(226, 97, 25);
        font-weight: bold;
    }

    .section_see-patient_div-three .style_text
    {
        font-weight: bold;
        background: rgb(0, 176, 102);
    }

    .section_see-patient_div-two th
    {
        text-align: center;
    }

    .section_see-patient_div-two td, .section_see-patient_div-three td
    {
        text-align: left;
    }

    .footer
    {
        margin-top: 80px;
        padding: 20px 10px;
    }

    @media screen and (max-width: 819px)
    {
        .section_see-patient_div-two, .section_see-patient_div-three
        {
            display: block;
            width: 70%;
            margin: auto;
        }

        .section_see-patient_div-three
        {
            margin-top: 60px;
        }

        .section_see-patient_div-two_table, .section_see-patient_div-three_table
        {
            width: 100%;
        }

        .style_text
        {
            width: 100px;
            box-sizing: border-box;
        }
    }
</style>