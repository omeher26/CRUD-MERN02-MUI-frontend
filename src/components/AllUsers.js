import React, { useState, useEffect } from 'react'
import { Box, CircularProgress, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Tooltip, styled } from '@mui/material'
import { Delete, Edit} from '@mui/icons-material'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { cyan, lightGreen, pink, purple, red } from '@mui/material/colors'
import toast from 'react-hot-toast'

const apiLink = 'http://localhost:8020'

const StyledTable = styled(Table)({
  width:'90%',
  margin: '50px auto'
})

const Thead = styled(TableHead)({
  background:'yellow'
})

const Tcell = styled(TableCell)({
  fontSize:20,
  fontWeight:5
})

const AllUsers = () => {
  const [users,setUsers] = useState([])

  const [loding,setLoding] = useState(true)

  useEffect(()=>{
    getAllUsers()
  },[])

  const getAllUsers = async() =>{
    try{
      const usersd = await axios.get(`${apiLink}/alldata`)
      setUsers(usersd.data) //after writing .data is very imp if we not then users.map is not a function error occured
      setLoding(false)
    } catch(err){
      console.log(err.message)
    }
  }

  const handleDelete = async(id) =>{
    try{
      await axios.delete(`${apiLink}/delete/${id}`)
      const newUsers = users.filter((item)=>{
        return item._id !== id;
      })
      setUsers(newUsers)
      toast.success('User deleted successfully')
    } catch(err) {
      console.log(err)
    }
  }


  return (
    <>
        <StyledTable>
          <Thead>
            <TableRow>
              <Tcell> ID </Tcell>
              <Tcell> Name </Tcell>
              <Tcell> Username </Tcell>
              <Tcell> Email </Tcell>
              <Tcell> Phone </Tcell>
              <Tcell> Actions </Tcell>
            </TableRow>
          </Thead>
          <TableBody>
            {
              loding 
              ? 
              <Box sx={{marginTop:'200%',marginLeft:'500%'}}>
                <CircularProgress color='secondary'/> 
              </Box>
              :
              users.map((value,index) =>{
                return(
                  <TableRow key={index} >

                    <TableCell sx={{background:cyan['A200']}} > {index + 1} </TableCell>
                    <TableCell> {value.name} </TableCell>
                    <TableCell sx={{background:pink[500]}} > {value.username} </TableCell>
                    <TableCell sx={{background:lightGreen['A400']}} > {value.email} </TableCell>
                    <TableCell> {value.phone} </TableCell>

                    <TableCell align='center' sx={{background:cyan['A200']}} >

                      <Tooltip title='Edit'>
                        <IconButton>
                          <Link to={`/edituser/` + value._id} >
                            <Edit sx={{color: purple['A400']}} />
                          </Link>
                        </IconButton>
                      </Tooltip>

                      <Tooltip  title='Delete'>
                        <IconButton >
                          <Link>
                            <Delete onClick={()=>handleDelete(value._id)} sx={{color : red[500]}} />
                          </Link>
                        </IconButton>
                      </Tooltip>

                    </TableCell>

                  </TableRow>
                )
              })
            }
          </TableBody>
        </StyledTable>
    </>
  )
}

export default AllUsers

