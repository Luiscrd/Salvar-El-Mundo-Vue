const respCorrrectas = new Array('a4', 'a2', 'a3', 'a4', 'a2', 'a4', 'a3', 'a1', 'a4', 'a1')

const comprobarResp = (pregunta, resp) => {

    switch (pregunta) {
        case 1:
            return resp === respCorrrectas[0] ? true : false

        case 2:
            return resp === respCorrrectas[1] ? true : false

        case 3:
            return resp === respCorrrectas[2] ? true : false

        case 4:
            return resp === respCorrrectas[3] ? true : false

        case 5:
            return resp === respCorrrectas[4] ? true : false

        case 6:
            return resp === respCorrrectas[5] ? true : false

        case 7:
            return resp === respCorrrectas[6] ? true : false

        case 8:
            return resp === respCorrrectas[7] ? true : false

        case 9:
            return resp === respCorrrectas[8] ? true : false

        case 10:
            return resp === respCorrrectas[9] ? true : false

        default:
            break;
    }

}

export default comprobarResp

