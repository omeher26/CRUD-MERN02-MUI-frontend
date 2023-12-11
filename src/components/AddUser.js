import { Button, FormControl, FormGroup, TextField, Typography, styled } from '@mui/material'
// import axios from 'axios'
import React, { useState } from 'react'
// import toast from 'react-hot-toast'
import { addUserA } from '../controller/userAction'
import {useNavigate} from 'react-router-dom'

// const apiLink = 'http://localhost:8020'

const Container = styled(FormGroup)({
    background:'white',
    width: '50%',
    margin: '5% auto 0 auto'
})

const Inputbox = styled(TextField)({
    marginTop:'20px'
})

const AddUser = () => {
    const data = {
        name:'',
        username:'',
        email:'',
        phone:''
    }

    const navigate = useNavigate();

    const [user,setUser] = useState(data)

    const onValueChange = (e) => {
        const {name,value} = e.target;
        setUser({...user, [name]:value})
        // console.log(user)
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        await addUserA(user)
        navigate('/allusers')

        // used above new method or below easy method anything used both are usedfull

        // try{
        //     await axios.post(`${apiLink}/create`,user)
        //     toast.success('User added successfully',{position:'top-right'})
        //     navigate('/')
        // } catch(err) {
        //     console.log(err)

        //     const userExist = user;
        //     if(userExist) {
        //         toast.error('Error occur due to User Already Exist')
        //     } else{
        //         toast.error('Internal Server Error')
        //     }
        // }
        
    }


  return (
    <>
        <Container>
            <FormControl>
                <Typography variant='h4' >Add User</Typography>
                <Inputbox name='name' onChange={onValueChange} id='standard-basic' label='Name' variant='standard' />
                <Inputbox name='username' onChange={onValueChange} id='standard-basic' label='Username' variant='standard' />
                <Inputbox name='email' onChange={onValueChange} id='standard-basic' label='Email' variant='standard' />
                <Inputbox name='phone' onChange={onValueChange} id='standard-basic' label='Phone' variant='standard' />
                <Button type='submit' onClick={handleSubmit} sx={{marginTop:4}} variant='contained'>Add User</Button>
            </FormControl>
        </Container>
    </>
  )
}

export default AddUser


