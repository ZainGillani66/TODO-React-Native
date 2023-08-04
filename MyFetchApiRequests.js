export const getAllTasks = async () => {
  const response = await fetch('https://ai.nayyartech.ai/webhook/getAllTasklists', {
    method: 'GET',
});
    const resJson = await response.json();
    return resJson;
};

export const myFetchPostRequest = async (tasklistId) => {
  const obj = {
    tasklist: tasklistId,
  };
  try {
    const response = await fetch('https://ai.nayyartech.ai/webhook-test/getAllTasks', {
      method: 'POST',
      body: JSON.stringify(obj),
    });

    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


export const myFetchCreateRequest = async (title) => {
  const obj = {
    title: title,
  };
  try {
    const response = await fetch('https://ai.nayyartech.ai/webhook/createTasklists', {
      method: 'POST',
      body: JSON.stringify(obj),
    });

    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error);
    throw error;
  }
};








// export const myFetchPostRequest = async () => {
//     const obj = {
//       tasklist: 'YXZMZFhHUWJXek9FZmxJYQ',
//       taskId: 'SEo1TjBsREhNOUJSaElJNg',
//     };
//       const response = await fetch('https://ai.nayyartech.ai/webhook-test/getAllTasks', {
//         method: 'POST',
//         mode: 'no-cors',
//         body: JSON.stringify(obj),
       
//         headers: {
//           'Content-Type': 'multipart/form-data, application/json',
//         },
//       })
//       .then((response) => response.json())
//       .then((json) => {
//         console.log(json); 
//         return json; 
//       })
//       .catch((error) => {
//         console.error(error);
//         throw error;
//       });
//   };





// export const myFetchPostRequest = () => {
//     const obj = {
//       tasklist: 'YXZMZFhHUWJXek9FZmxJYQ',
//       taskId: 'SEo1TjBsREhNOUJSaElJNg',
//     };
  
//     fetch('https://ai.nayyartech.ai/webhook-test/fa8ee305-1fac-48cd-acff-aceaa3fa1ecf', {
//       method: 'POST',
//       mode: 'cors',
//       body: JSON.stringify(obj),
//       headers: {
//         'Content-Type':  'multipart/form-data, application/json',
//       },
//     })
//       .then((response) => response.json())
//       .then((json) => {
//         console.log(json); 
//         return json; 
//       })
//       .catch((error) => {
//         console.error(error);
//         throw error;
//       });
//   };
  



// export const myFetchPostRequest = async () => {
//   const obj = {
//     tasklist: 'YXZMZFhHUWJXek9FZmxJYQ',
//     taskId: 'SEo1TjBsREhNOUJSaElJNg',
//   };
//   // const tasklist = 'YXZMZFhHUWJXek9FZmxJYQ';
//     const response = await fetch('https://ai.nayyartech.ai/webhook-test/fa8ee305-1fac-48cd-acff-aceaa3fa1ecf', {
//       method: 'POST',
//       mode: 'no-cors',
//       body: JSON.stringify(obj),
//       // body: JSON.stringify({
//       //     tasklist: 'YXZMZFhHUWJXek9FZmxJYQ',
//       //     // taskId: 'SEo1TjBsREhNOUJSaElJNg'
//       // }),
//       headers: {
//         'Content-Type': 'multipart/form-data, application/json',
//       },
//     })
   
// };





// export const myFetchGetRequest = async () => {
//     const response = await fetch('https://ai.nayyartech.ai/webhook-test/fa8ee305-1fac-48cd-acff-aceaa3fa1ecf')
//     const resJson = await response.json();
//     return resJson;
// };

// export const myFetchPostRequest = async () => {
//     let obj = {
//         tasklist: 'YXZMZFhHUWJXek9FZmxJYQ',
//         taskId: 'SEo1TjBsREhNOUJSaElJNg'
//     };
//     console.log("Zainnnnn", (obj));
//     const response = await fetch('https://ai.nayyartech.ai/webhook-test/fa8ee305-1fac-48cd-acff-aceaa3fa1ecf',{
//         method: 'POST',
//         data: obj,
//         headers: {
//                 'Content-Type': 'multipart/form-data',
//             // 'Content-Type': 'application/json; charset=utf-8',
//         }
//     });
//     const resJson = await response.json();
//     return resJson;
// };