const input = `input__formkit
                formkit-invalid:border-red-600`
                
export default {
    global: {
        outer: 'mb-3 h-[84px]',
        input: 'w-full h-10 p-2 rounded',
        message: 'text-red-500'
    },
    text: { input: input},
    email: {  input: input },
    password: { input: input },
    submit: {
        wrapper: 'grid justify-items-center pt-2',
        input: 'w-60 bg-red-500 hover:bg-red-600 text-white'
    }
}