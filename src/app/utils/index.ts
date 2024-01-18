

export const asyncHandle = (fn: Function) => {
    return (formState: {message: string}, formData: FormData) => fn(formState, formData).catch((error: Error)=>{
        return {message: error.message};
    })
}