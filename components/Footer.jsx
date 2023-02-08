import { Box,Flex ,Text} from '@chakra-ui/layout';
import Link from 'next/link';

const Footer = () => (
  <>
  <Box marginTop={'50px'} borderTop='1px' borderColor={'gray.200'} paddingTop={'20px'}>
    <Flex justifyContent={'space-between'} alignItems={'flex-start'}>
   

      <Box>
        <Text  fontSize={'xl'} fontWeight='bold' paddingBottom={5}> Recomented Visit </Text>

        <Link href={'http://localhost:3000/search?purpose=for-rent'}>
          <Text  p={2}fontSize={'large'} color='blue.300' textDecoration={'underline'} >
          Search for-Rent 
          </Text>
        </Link>

        <Link href={'http://localhost:3000/search?purpose=for-sale'}>
          <Text p={2} fontSize={'large'} color='blue.300' textDecoration={'underline'} >
            Search for-Sale 
          </Text>
        </Link>
      </Box>

      <Box>
        <Text  fontSize={'xl'} fontWeight='bold' paddingBottom={5}> Fast Fliters </Text>

        <Link href={'http://localhost:3000/search'}>
          <Text p={2} fontSize={'large'} color='blue.300' textDecoration={'underline'} >
            Search for rent-Frequency Yearly
          </Text>
        </Link>

        <Link href={'http://localhost:3000/search?purpose=for-sale&sort=price-asc'}>
          <Text p={2} fontSize={'large'} color='blue.300' textDecoration={'underline'} >
            Search for Lowest Prices
          </Text>
        </Link>



      </Box>

      <Box>
        <Text fontSize={'xl'} fontWeight='bold' paddingBottom={5} > Popular Searches </Text>

        <Link href={'http://localhost:3000/search?categoryExternalID=4'}>
          <Text p={2} fontSize={'large'} color='blue.300' textDecoration={'underline'} >
            search for Hotel Apartment 
          </Text>
        </Link>

        <Link href={'http://localhost:3000/search?categoryExternalID=4'}>
          <Text p={2} fontSize={'large'} color='blue.300' textDecoration={'underline'} >
            search for Apartments 
          </Text>
        </Link>

        <Link href={'http://localhost:3000/search?categoryExternalID=16'}>
          <Text p={2} fontSize={'large'} color='blue.300' textDecoration={'underline'} >
            search for Town House 
          </Text>
        </Link>

        <Link href={'http://localhost:3000/search?categoryExternalID=3'}>
          <Text p={2} fontSize={'large'} color='blue.300' textDecoration={'underline'} >
            search for Villas 
          </Text>
        </Link>
      </Box>

    </Flex>
  </Box>
  
  <Box textAlign='center' p='5' color='gray.600' borderTop='1px' borderColor='gray.100'>
    © {new Date().getFullYear()} Dubai, Inc.
  </Box>
  </>
);

export default Footer;