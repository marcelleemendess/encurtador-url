import { Input, Button, Box, InputGroup } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { SERVER_ENDPOINTS } from '../config';

const URLShortenerForm = () => {
    const [ destination, setDestination ] = useState();

   async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
       e.preventDefault();

       const result = await axios
        .post(`${SERVER_ENDPOINTS}/api/url`, {
            destination,
       })
       .then((resp) => resp.data);

   }

   return (
       <Box pos="relative">
           <form onSubmit={handleSubmit}>
               destination: {destination}
               <Input
                    onChange={(e:any) => setDestination(e.target.value)}
                    placeholder="https://exemple.com"
               />
                <Button type="submit">Gerar URL</Button>
           </form>
       </Box>
   );
}

export default URLShortenerForm;