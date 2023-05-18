import axios from 'axios'
//fetch 
export const getEstadoFetch = async (CallBack) => {
    var url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
    await fetch(url)
        .then(resp => resp.json())
        .then(res => CallBack(res))
}

//axios
export const getEstadoAxios = (CallBack) => {
    var url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
    axios({
        method: 'get',
        url: url
    }).then((resp) => {
        CallBack(resp.data)
    })
}