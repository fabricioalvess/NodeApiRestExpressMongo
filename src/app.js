import express from "express"
const app = express()
app.use(express.json()) 
const livros =[
    {
        id:1, titulo:"o senhor dos aneis"
    },
    {
        id:2, titulo:"o hobbit"
    }
]
function buscaLivro(id){
    return livros.findIndex(livro => {
        return livro.id === Number(id)
     })
}
app.get("/",(req,res)=>{
    res.status(200).send("Curso de node.js")
})
app.get("/livros",(req,res)=>{
    res.status(200).json(livros)
})
app.get("/livros/:id",(req,res)=>{
    const id = buscaLivro(req.params.id)
    res.status(200).json(livros[id])
})
app.post("/livros",(req,res)=>{
    livros.push(req.body)
    res.status(201).send("livro cadastrado com sucesso")
})
app.put("/livros/:id",(req,res)=>{
    const id = buscaLivro(req.params.id)
    livros[id].titulo = req.body.titulo
    res.status(200).send("atualizado com sucesso")
})
app.delete("/livros/:id",(req,res)=>{
    const id = buscaLivro(req.params.id)
    livros.splice(id,1)
    res.status(204).send("deletado com sucesso")
})

export default app