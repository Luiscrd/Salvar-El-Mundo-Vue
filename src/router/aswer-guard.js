import store from "@/store";

const isCorrectAnswerGuard = async(to,from, next) => {

    const id = Number(to.params.id) 

    const preguntaActual = store.state.preguntaActual

    if(id === preguntaActual) {
        next()
    } else {
        next({ name: 'answer', params: { id: preguntaActual }})
    }

}

export default isCorrectAnswerGuard