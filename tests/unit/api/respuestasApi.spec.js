import respCorrrectas from '@/api/respuestas-api'

describe('Pruebas en el respuestas-api', () => {

    test('Debe retornar un true al responder correctamente y un false si no', async () => {

        expect(respCorrrectas(1, 'a4')).toBeTruthy()

        expect(respCorrrectas(1, 'a2')).toBeFalsy()

    });

})