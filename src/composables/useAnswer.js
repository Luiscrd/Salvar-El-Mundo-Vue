import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import comprobarResp from '@/api/respuestas-api'
import { computed } from 'vue'

const useAnswer = () => {
    const router = useRouter()
    const store = useStore()

    return {
        answer: answer = computed(() => store.getters['answer']),
        len: store.getters['answers'].length,
        onSubmit: onSubmit = () => {
            const resp = $("input[name='answer']:checked").val()
            if (!resp) return
            const compResp = comprobarResp(answer.value.id, resp)
            store.commit('updateAnswer', compResp)
            if (compResp) {
                router.push({ name: 'acierto' })
            } else {
                router.push({ name: 'error' })
            }
        }
    }
}

export default useAnswer