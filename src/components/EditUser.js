import { ArrowBack } from '@mui/icons-material'
import { Box, Button, FormControl, FormGroup, IconButton, TextField, Tooltip, Typography, styled } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { updateUserA } from '../controller/userAction'
import toast from 'react-hot-toast'


const apiLink = 'http://localhost:8020'

const Container = styled(FormGroup)({
    background:'white',
    width: '50%',
    margin: '3% auto 0 auto'
})

const Inputbox = styled(TextField)({
    marginTop:'20px'
})

const EditUser = () => {
    const userM = {
        name:'',
        username:'',
        email:'',
        phone:''
    }

    const {id} = useParams();
    const [user,setUser] = useState(userM)

    const navigate = useNavigate()

    useEffect(()=>{
        getUser()
    },[id])

    const getUser = async() => {
        try{
            const userD = await axios.get(`${apiLink}/getone/${id}`)
            setUser(userD.data)
        } catch(err){
            console.log(err)
        }
    }

    const handleInputData = (e) =>{
        const {name,value} = e.target;
        setUser({...user,[name]:value})
        // console.log(user)
    }

    const handleUpdateUser = async(e)=>{
        e.preventDefault()

        // await updateUserA(user) 

        // used upper or below methods 

        try{
            await axios.put(`${apiLink}/update/${id}`, user)
            toast.success('User Updated Successfully')
            navigate('/allusers')
        } catch(err){
            console.log(err)
        }
    }

  return (
    <>
        <Container>
            <Box sx={{mb:4, ml:-7}} >
                <Tooltip title='Back' >
                    <IconButton>
                        <Link to={'/allusers'}>
                            <ArrowBack sx={{fontSize:40,color:'black',fontWeight:'bold'}}/>
                        </Link>
                    </IconButton>
                </Tooltip>
            </Box>
            <FormControl>
                <Typography variant='h4' >Edit User</Typography>
                <Inputbox name='name' value={user.name} onChange={handleInputData} id='standard-basic' label='Name' variant='standard' />
                <Inputbox name='username' value={user.username} onChange={handleInputData} id='standard-basic' label='Username' variant='standard' />
                {/* <Inputbox name='email' value={user.email} onChange={handleInputData} id='standard-basic' label='Email' variant='standard' /> */}
                {/* above email is commneting due to regstric user to change email */}
                <Inputbox name='phone' value={user.phone} onChange={handleInputData} id='standard-basic' label='Phone' variant='standard' />
                <Button type='submit' onClick={handleUpdateUser} sx={{marginTop:4}} variant='contained'>Edit User</Button>
            </FormControl>
        </Container>
    </>
  )
}

export default EditUser


