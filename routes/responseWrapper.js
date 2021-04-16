const successWrapper = (data) => {
    return {
        status: 200,
        content: {
            payload: data,
            message: "Operation Succesfull!"
        }
    }
}

const serverErrorWrapper = (data) => {
    return {
        status: 500,
        content: {
            payload: data,
            message: "Internal Server Error"
        }
    }
}

module.exports = {
    successWrapper: successWrapper,
    serverErrorWrapper: serverErrorWrapper
}