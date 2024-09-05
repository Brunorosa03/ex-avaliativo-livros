let proxId = 1

const model = (body, id = proxId++) => {
    console.log(body)
    if(
        body.titulo != undefined &&
        body.autor != undefined &&
        body.ano != undefined &&
        body.genero != undefined &&
        body.titulo != "" &&
        body.autor != "" &&
        body.ano != "" &&
        body.genero != "" 

    ) {
        return {
            id,
            titulo:body.titulo,
            autor:body.autor,
            ano:body.ano,
            genero:body.genero

        }
    }
}

module.exports = model


//Estrutura do ProjetoTipo de Dado: Livro (Book)

//   Atributos do Livro:
//   id (número único)
//   título (string)
//    autor (string)
//    ano (número)
//   gênero (string)