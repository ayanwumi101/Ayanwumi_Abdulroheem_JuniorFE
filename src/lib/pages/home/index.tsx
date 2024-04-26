'use client'

import { Flex, Box, Stack, Heading } from '@chakra-ui/react';
import { ButtonComponent } from '~/lib/components/Button';
import CapsuleCard from '~/lib/components/Cards';
import CustomModal from '~/lib/components/Modal';
import SearchBar from '~/lib/components/SearchBar';
import { SkeletonLoader } from '~/lib/components/Skeleton';
import { RocketsContext } from '~/lib/layout';
import {useContext, useEffect, useState} from 'react'
import Hero from '~/lib/components/Hero';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import CapsuleDetails from '~/lib/components/CapsuleDetails';
import { CapsuleDetailsProps } from '~/lib/utilities/schema';
import Pagination from '~/lib/components/Pagination';


const Home = () => {
  const {rockets, loading,} = useContext<any>(RocketsContext);
  const [showCapsuleDetailsModal, setShowCapsuleDetailsModal] = useState<boolean>(false);
  const [capsuleDetails, setCapsuleDetails] = useState<CapsuleDetailsProps | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [data, setData] = useState<any[]>([])

  const closeCapsuleDetailsModal = () => {
    setShowCapsuleDetailsModal(false);
  }

  const openCapsuleDetailsModal = (item: any) => {
    setCapsuleDetails(item)
    setShowCapsuleDetailsModal(true);
  }


  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    if (searchQuery) {
      const filtered = rockets?.filter((rocket: any) =>
        rocket.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rocket.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rocket.serial.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setData(filtered);
    } else {
      setData(rockets)
    }
  }, [searchQuery]);

  
  useEffect(() => {
    setData(rockets);
  }, [rockets])


  
  return (
    <Box>
      <Stack spacing='45px'>
        <Box>
          <Swiper
            pagination={{ clickable: true }} modules={[Autoplay]} className="mySwiper"
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <Hero
                image='https://sxcontent9668.azureedge.us/cms-assets/assets/make_life_multiplanetary_desktop_3fa7cff73c.jpg'
                title='TO MAKE LIFE MULTIPLANETARY'
                description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quos dolorem quia necessitatibus veniam in nobis atque voluptatem ullam inventore.'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Hero
                image='https://sxcontent9668.azureedge.us/cms-assets/assets/Star6_53_042324_DSC_7591b_21ae87f3fd.jpg'
                title='STARLINK MISSION'
                description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quos dolorem quia necessitatibus veniam in nobis atque voluptatem ullam inventore.'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Hero
                image='https://sxcontent9668.azureedge.us/cms-assets/assets/Flight_3_Website_Desktop_2_8cd1983689.jpg'
                title="STARSHIP'S THIRD FLIGHT TEST"
                description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quos dolorem quia necessitatibus veniam in nobis atque voluptatem ullam inventore.'
              />
            </SwiperSlide>
          </Swiper>
        </Box>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Box mb='12'>
          {rockets?.length < 1 ? 
            <Box w='80%' mx='auto'>
              <Stack spacing='25px'>
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
              </Stack>
            </Box>
            :
            <Box w='80%' mx='auto'>
              {data?.length < 1 ? 
                <Box>
                  <Heading fontSize={25} textAlign='center'>Oops! No Item match your search query</Heading>
                </Box>
              :
                <Stack spacing='25px'>
                  {currentItems?.map((item: any) => <CapsuleCard key={item.id} id={item.id} type={item.type} status={item.status} serial={item.serial} onClick={() => openCapsuleDetailsModal(item)} />)}
                </Stack> 
              }
            </Box>
          }
        </Box>
      </Stack>
      <CustomModal
        isOpen={showCapsuleDetailsModal}
        onClose={closeCapsuleDetailsModal}
      >
          <CapsuleDetails 
            id={capsuleDetails?.id} 
            type={capsuleDetails?.type} 
            status={capsuleDetails?.status} 
            serial={capsuleDetails?.serial}
            last_update={capsuleDetails?.last_update}
            land_landings={capsuleDetails?.land_landings}
            reuse_count={capsuleDetails?.reuse_count}
            launches={capsuleDetails?.launches}
            water_landings={capsuleDetails?.water_landings}
            
          />
      </CustomModal>
      <Pagination 
        rockets={data}  
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        indexOfLastItem={indexOfFirstItem}
      />
    </Box>
  );
};

export default Home;


