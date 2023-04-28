import {reactive, readonly} from "vue";

const state = reactive({
    showModalPackages: false,
    showModalTelephone: false,
    showModalSMS: false,
    showModalSend: false,
    showModalTermsOfAction: false,
    showModalQuestion: false,
    showModalQuestionClose: false,
    telephoneNumber: '',
    smsNumber: '',
    cardNumber: '',
    packageMode: '',
    questionName: '',
    questionPhone: '',
    questionText: ''
});

export default {state: state};
