
import axios from 'axios'
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom'


const apiLink = 'http://localhost:8020'
const {id} = useParams;

export const addUserA = async(user) =>{
    try{
        await axios.post(`${apiLink}/create`,user)
        toast.success('User add Successfully', {position:'top-right'})
    } catch(err){
        console.log(err)
        const userExist = user;
        if(userExist){
            toast.error('User already exist', {position:'top-right'})
        } else {
            toast.error('An error occurred during registration')
        }
    }
}

export const updateUserA = async(user) => {
    try{
        await axios.put(`${apiLink}/update/${id}`,user)
        toast.success('User Updated Successfully')
    } catch(err){
        console.log(err)
        const userExist = user;
        if(userExist) {
            toast.error('An error due to User Already Exist')
        } else{
            toast.error('An error occurred during registration')
        }
    }
}

