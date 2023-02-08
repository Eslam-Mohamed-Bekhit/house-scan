import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer, Icon, MenuDivider, MenuGroup } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { MdOtherHouses } from 'react-icons/md'
import { FiKey } from 'react-icons/fi';

const Navbar = () => (
  <Flex p='2' borderBottom='1px' borderColor='gray.100'>
    <Box fontSize='3xl' color='red.500' fontWeight='bold'>
      <Link href='/' paddingleft='2'>
        <Icon as={MdOtherHouses} paddingTop='2' color='red.400'  /> House-Scan
        </Link>
    </Box>
    <Spacer />
    <Box>
      <Menu isLazy>
        <MenuButton as={IconButton} icon={<FcMenu />} variant='outline' color='red.400' />
        <MenuList>
          <Link href='/' passHref legacyBehavior>
            <MenuItem icon={<FcHome />}>Home</MenuItem>
          </Link>
          <Link href='/search' passHref legacyBehavior>
            <MenuItem icon={<BsSearch />}>Search</MenuItem>
          </Link>
          <MenuDivider />
          <MenuGroup title='By Purpose'>
          <Link href='/search?purpose=for-sale' passHref legacyBehavior>
            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
          </Link>
          <Link href='/search?purpose=for-rent' passHref legacyBehavior>
            <MenuItem icon={<FiKey />}>Rent Property</MenuItem >
          </Link>
        </MenuGroup>
       
        </MenuList>
      </Menu>
    </Box>
  </Flex>
);

export default Navbar;