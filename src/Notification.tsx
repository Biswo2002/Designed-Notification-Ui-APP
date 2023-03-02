import { Avatar, Box, HStack, Pressable, ScrollView, Text } from 'native-base'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Message = [
  {
    id: '1',
    img: 'https://media.istockphoto.com/id/923852236/photo/cute-little-baby-boy-relaxing-in-bed-after-bath-smiling-happily.jpg?s=612x612&w=0&k=20&c=v--Yhh1A4G12nW-Kud6JG16aGNAScVSdovPH8YxOczg=',
    time: '9 hrs ago',
    title: 'Lorem, ipsum dolor sit amet consectetur sll adipisicing elit. Rem, dolor.',
  },
  {
    id: '2',
    img: 'https://media.istockphoto.com/id/923852236/photo/cute-little-baby-boy-relaxing-in-bed-after-bath-smiling-happily.jpg?s=612x612&w=0&k=20&c=v--Yhh1A4G12nW-Kud6JG16aGNAScVSdovPH8YxOczg=',
    time: '9 hrs ago',
    title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, dolor.',
  },
  {
    id: '3',
    img: 'https://media.istockphoto.com/id/923852236/photo/cute-little-baby-boy-relaxing-in-bed-after-bath-smiling-happily.jpg?s=612x612&w=0&k=20&c=v--Yhh1A4G12nW-Kud6JG16aGNAScVSdovPH8YxOczg=',
    time: '9 hrs ago',
    title: 'Lorem, ipsum dolor sit amet consectetur adipi sicing elit. Rem, dolor.',
  },
  {
    id: '4',
    img: 'https://media.istockphoto.com/id/923852236/photo/cute-little-baby-boy-relaxing-in-bed-after-bath-smiling-happily.jpg?s=612x612&w=0&k=20&c=v--Yhh1A4G12nW-Kud6JG16aGNAScVSdovPH8YxOczg=',
    time: '9 hrs ago',
    title: 'Lorem, ipsum dolor sit amet consectetur adipi sicing elit. Rem, dolor.',
  },
  {
    id: '5',
    img: 'https://media.istockphoto.com/id/923852236/photo/cute-little-baby-boy-relaxing-in-bed-after-bath-smiling-happily.jpg?s=612x612&w=0&k=20&c=v--Yhh1A4G12nW-Kud6JG16aGNAScVSdovPH8YxOczg=',
    time: '9 hrs ago',
    title: 'Lorem, ipsum dolor sit amet consectetur adipi sicing elit. Rem, dolor.',
  },
  {
    id: '6',
    img: 'https://media.istockphoto.com/id/923852236/photo/cute-little-baby-boy-relaxing-in-bed-after-bath-smiling-happily.jpg?s=612x612&w=0&k=20&c=v--Yhh1A4G12nW-Kud6JG16aGNAScVSdovPH8YxOczg=',
    time: '9 hrs ago',
    title: 'Lorem, ipsum dolor sit amet consectetur adipi sicing elit. Rem, dolor.',
  },
  {
    id: '7',
    img: 'https://media.istockphoto.com/id/923852236/photo/cute-little-baby-boy-relaxing-in-bed-after-bath-smiling-happily.jpg?s=612x612&w=0&k=20&c=v--Yhh1A4G12nW-Kud6JG16aGNAScVSdovPH8YxOczg=',
    time: '9 hrs ago',
    title: 'Lorem, ipsum dolor sit amet consectetur adipi sicing elit. Rem, dolor.',
  },
  {
    id: '8',
    img: 'https://media.istockphoto.com/id/923852236/photo/cute-little-baby-boy-relaxing-in-bed-after-bath-smiling-happily.jpg?s=612x612&w=0&k=20&c=v--Yhh1A4G12nW-Kud6JG16aGNAScVSdovPH8YxOczg=',
    time: '9 hrs ago',
    title: 'Lorem, ipsum dolor sit amet consectetur adipi sicing elit. Rem, dolor.',
  },
]

const Notification = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [tab, setTab] = useState('')
  const handleSelectItem = (itemId: string) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  return (
    <Box safeArea bgColor={'#fff'} flex={1} >
      <Box
        p={4}
      >
        <AntDesign name='arrowleft' size={25} color={'#000'} />
      </Box>
      <ScrollView showsHorizontalScrollIndicator={false} >
        <Box
          borderBottomWidth={1}
          borderBottomLeftRadius={'85'}
          borderLeftWidth={'1'}
          py={2}
          borderColor={'gray.300'}
        >
          <Text
            fontSize={'2xl'}
            bold
            color={'#000'}
            textAlign={'center'}
            py={5}
          >
            Notifications
          </Text>
        </Box>
        {
          Message.map(item => (

            <Pressable
              onPress={() => handleSelectItem(item?.id)}
              bgColor={selectedItems.includes(item?.id) ? 'pink.600' : '#fff'}
              // bgColor={'pink.600'}
              key={item?.id}

            >
              <HStack
                borderBottomLeftRadius={'90'}
                py={10}
                px={6}
                borderColor={selectedItems.includes(item?.id) ? 'gray.300' : 'gray'}
                bgColor={selectedItems.includes(item?.id) ? '#fff' : 'pink.600'}
              >
                <Avatar source={{ uri: item?.img }}
                  size={'md'}
                />
                <Box
                  px={4}
                >
                  <Text
                    color={selectedItems.includes(item?.id) ? '#000' : '#fff'}
                    bold
                    textAlign={'left'}
                    mr={5}
                    fontSize={'md'}
                  >
                    {item?.title}
                  </Text>
                  <Text
                    mt={'4'}
                    fontSize={'sm'}
                    color={selectedItems.includes(item?.id) ? 'muted.400' : 'gray.200'}
                    bold
                  >
                    9 hrs ago
                  </Text>
                </Box>
              </HStack>
            </Pressable>
          ))
        }

        <Box
          bgColor={'blue.600'}
          p={2}
          m={4}
          borderBottomRadius={'22'}
        >

        </Box>
      </ScrollView >
    </Box >
  )
}

export default Notification

const styles = StyleSheet.create({})