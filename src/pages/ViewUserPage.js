import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { SiGmail } from "react-icons/si"
import { BsFillTelephoneFill, BsFillPersonFill, BsFillQuestionCircleFill, BsCalendar2CheckFill } from 'react-icons/bs'
import { LuIndianRupee } from 'react-icons/lu';
import { ImSpoonKnife } from 'react-icons/im';
import { Box, Card, Container, Paper, Stack, Typography, styled } from '@mui/material'
import Loading from '../components/Loding'
import { getCustomerByID } from '../query/user/user.query'

function ViewUserPage() {
    const { id } = useParams()

    const { data, isFetching } = useQuery({
        queryKey: ['getUserById', id],
        queryFn: () => getCustomerByID(id),
        select: (data) => data?.data
    })


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#f0f2f3",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
        display: 'flex',
        // margin: '0 auto',
        justifyContent: 'center',
        flexGrow: 1
    }));

    function dateFormat(dateStr) {
        const date = new Date(dateStr);

        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();

        return `${day}-${month}-${year}`;
    }

    return (
        <>
            {

                isFetching ?
                    <Loading />
                    :
                    <>
                        <Helmet>
                            <title>{data?.customerName}</title>
                        </Helmet>

                        <Container>
                            <Typography variant="h3" gutterBottom sx={{ textTransform: 'capitalize' }} >
                                {data?.customerName}
                            </Typography>

                            <Box sx={{ width: "100%", marginTop: '30px' }} >
                                <Stack
                                    spacing={{ xs: 1, sm: 2 }}
                                    direction="row"
                                    flexWrap="wrap"
                                >
                                    <Item> <div><SiGmail style={{ fontSize: '18px', marginRight: '6px' }} /></div> <div style={{ fontSize: '13px' }}>{data?.emailId}</div></Item>
                                    <Item><div><BsFillTelephoneFill style={{ fontSize: '18px', marginRight: '6px' }} /></div>  <div style={{ fontSize: '13px' }}>{data?.contactNumber}</div></Item>
                                </Stack>
                            </Box>

                            <Typography variant="h6" gutterBottom style={{ marginTop: '30px' }}>
                                Package Details
                            </Typography>

                            <Box sx={{ width: "100%", marginTop: '30px' }} >
                                <Stack
                                    spacing={{ xs: 1, sm: 2 }}
                                    direction="row"
                                    flexWrap="wrap"
                                >
                                    <Item style={{ display: 'block' }}>
                                        <div style={{ fontSize: '13px', textTransform: 'capitalize', color: 'gray', fontWeight: '700' }}>{data?.packageType}</div>

                                        <Box sx={{ width: "100%", marginTop: '30px' }} >
                                            <Stack
                                                spacing={{ xs: 1, sm: 2 }}
                                                direction="row"
                                                flexWrap="wrap"
                                            >
                                                {data?.overNightCrossCamp && <Item style={{ background: 'white' }}><div style={{ fontSize: '13px' }}>Over Night Cross Camp - {data?.overNightCrossCamp}</div></Item>}
                                                {data?.overNightSkyRooms && <Item style={{ background: 'white' }}><div style={{ fontSize: '13px' }}>Over Night Sky Rooms - {data?.overNightSkyRooms}</div></Item>}
                                                {data?.overNightTent && <Item style={{ background: 'white' }}><div style={{ fontSize: '13px' }}>Over Night Tent - {data?.overNightTent}</div></Item>}
                                                {data?.overNightDay && <Item style={{ background: 'white' }}><div style={{ fontSize: '13px' }}>Over Night Day - {data?.overNightDay}</div></Item>}
                                                {data?.overNightRooms && <Item style={{ background: 'white' }}><div style={{ fontSize: '13px' }}>Over Night Rooms - {data?.overNightRooms}</div></Item>}
                                                {data?.dayPicnicTime && <Item style={{ background: 'white' }}><div style={{ fontSize: '13px' }}>Day Picnic Time - {data?.dayPicnicTime}</div></Item>}
                                            </Stack>
                                        </Box>


                                    </Item>
                                    {/* <Item><div><BsFillTelephoneFill style={{ fontSize: '18px', marginRight: '6px' }} /></div>  <div style={{ fontSize: '13px' }}>{data?.contactNumber}</div></Item> */}
                                </Stack>
                            </Box>

                            <Box sx={{ width: "100%", marginTop: '30px' }} >
                                <Stack
                                    spacing={{ xs: 1, sm: 2 }}
                                    direction="row"
                                    flexWrap="wrap"
                                >
                                    <Item><div><BsCalendar2CheckFill style={{ fontSize: '18px', marginRight: '6px' }} /></div>  <div style={{ fontSize: '13px' }}>Booking Date    -  {dateFormat(data?.bookingDate)}</div></Item>
                                    <Item><div><BsCalendar2CheckFill style={{ fontSize: '18px', marginRight: '6px' }} /></div>  <div style={{ fontSize: '13px' }}>Check In Date   -  {dateFormat(data?.checkInDate)}</div></Item>
                                    <Item><div><BsCalendar2CheckFill style={{ fontSize: '18px', marginRight: '6px' }} /></div>  <div style={{ fontSize: '13px' }}>Check Out Date   -  {dateFormat(data?.checkOutDate)}</div></Item>
                                </Stack>
                            </Box>

                            <Box sx={{ width: "100%", marginTop: '30px' }} >
                                <Stack
                                    spacing={{ xs: 1, sm: 2 }}
                                    direction="row"
                                    flexWrap="wrap"
                                >
                                    <Item ><div><ImSpoonKnife style={{ fontSize: '18px', marginRight: '6px' }} /></div> <div style={{ fontSize: '13px' }}>{data?.foodPreference}</div></Item>
                                    <Item ><div><BsFillPersonFill style={{ fontSize: '18px', marginRight: '6px' }} /></div>  <div style={{ fontSize: '13px' }}>{data?.numberOfPeople}- Total Person</div></Item>
                                    <Item ><div><BsFillQuestionCircleFill style={{ fontSize: '18px', marginRight: '6px' }} /></div>  <div style={{ fontSize: '13px' }}>Customer Type - {data?.typeOfCustomer}</div></Item>
                                </Stack>
                            </Box>


                            <Box sx={{ width: "100%", marginTop: '30px' }} >
                                <Stack
                                    spacing={{ xs: 1, sm: 2 }}
                                    direction="row"
                                    flexWrap="wrap"
                                >
                                    <Item style={{ background: '#D1E9FC', color: '#061B64' }} ><div><LuIndianRupee style={{ fontSize: '18px', marginRight: '6px' }} /></div> <div style={{ fontSize: '13px' }}>{data?.advancePayment} - Advanced</div></Item>
                                    <Item style={{ background: 'rgb(191 255 200)', color: 'green' }}><div><LuIndianRupee style={{ fontSize: '18px', marginRight: '6px' }} /></div>  <div style={{ fontSize: '13px' }}>{data?.totalPayment}- Total</div></Item>
                                </Stack>
                            </Box>

                        </Container>
                    </>
            }

        </>
    )
}

export default ViewUserPage