<template>
    <section>
        <div class="mainSection">
            <h2>¡¡Administración base de datos!!</h2>
        </div>
    </section>

    <div class="main_footer">
        <h4>Orlando Castañeda Developer</h4>
        <h3 id="title">Misión TIC 2022</h3>
        <h5>All rights reserved © 2022</h5>
    </div>
</template>

<style>
    html
    {
        height: 100%;
    }

    #app
    {
        position: relative;
        height: inherit;
    }

    section
    {
        position: relative;
        height: 100%;
        width: 100%;
    }

    .mainSection
    {
        width: 500px !important;
        margin: auto;
        margin-top: 70px;
        text-align: center;
        width: 500px;
        border-radius: 10px;
        border: 8px double white;
        background: rgb(54, 79, 109);
        z-index: -1;
        box-sizing: border-box;
    }

    .mainSection h2
    {
        margin: 0;
        padding: 50px;
        font-size: 45px;
        color: rgb(237, 237, 237);
    }

    .main_footer
    {
        position: absolute;
        width: 100%;
        height: 100px;
        padding: 15px 20px;
        background: rgb(58, 58, 58);
        border-top: 4px double white;
        box-sizing: border-box;
        bottom: 0 !important;
    }

    .main_footer h4, h5
    {
        position: absolute;
        margin: 0;
        color: white;
        display: inline-block;
    }

    .main_footer h5
    {
        bottom: 15px;
    }

    #title
    {
        position: absolute;
        color: white;
        font-size: 18px;
        margin: 0 !important;
        right: 20px !important;
        bottom: 15px !important;
    }
</style>