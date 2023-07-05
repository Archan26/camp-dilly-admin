import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

// import { useState, useEffect } from 'react';

// function Users() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch('/getFormData')
//       .then((response) => response.json())
//       .then((data) => setUsers(data))
//       .catch((error) => console.error(error));
//   }, []);

//   return users

// }
// export default Users;



const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.name.fullName(),
  company: faker.company.name(),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'banned']),
  role: sample([
    'Leader',
    'Hr Manager',
    'UI Designer',
    'UX Designer',
    'UI/UX Designer',
    'Project Manager',
    'Backend Developer',
    'Full Stack Designer',
    'Front End Developer',
    'Full Stack Developer',
  ]),
}));

export default users;
