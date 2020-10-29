const Database = require('./db.js')

const saveOrphanage = require('./saveOrphanage.js')

Database.then(async db => {
    //inserir dados na tabela 
/*     await saveOrphanage(db, {
        lat: "-27.222633",
        lng: "-49.6455874",
        name: "Local das meninas",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "965661719",
        images: [
            "https://images.unsplash.com/photo-1603138461779-b27814ed7aa0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1565744643998-5c196cf891f5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1595295407820-3563d04518be?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1563465814437-b1a057a461ed?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1601180964401-6e474136af83?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1598454444427-8bffa498b6f2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "1"
    }) */
    //consultar dados na tabela
    /* const selectedOrphanages = await db.all(`SELECT * FROM orphanages`)
    console.log(selectedOrphanages) */

    //consultar somente um orfanato pelo Id
    /* const orphanage = await db.all(`SELECT * FROM orphanages WHERE id = '3'`)
    console.log(orphanage) */
    
    //apagar dados da table
    /* await db.all(`DELETE FROM orphanages WHERE id = 4`) */
})