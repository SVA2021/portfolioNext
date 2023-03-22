import {app} from './firebaseConfig';
import {
    addDoc,
    collection,
    doc,
    deleteDoc,
    getDoc,
    getDocs,
    getFirestore,
    limit,
    orderBy,
    query,
    startAfter,
    startAt,
    updateDoc,
    where
} from 'firebase/firestore';
import {actualProjectT, futureProjectT, projectMode} from "@/@types/projects";

const firestore = getFirestore(app);

export async function getFbDocs<T>(path: string) {
    const fbDocs = collection(firestore, path)
    const docs = await getDocs(fbDocs);
    let result: any[] = [];
    docs.forEach((item) => result.push(item.data()))
    return result as T[];
}

export async function getMyFbDocs<T>(projectMode: projectMode) {
    return await getFbDocs<T>(projectMode);
}

export async function getFutureProjects() {
    return await getMyFbDocs<futureProjectT>('future');
}

export async function getActualProjects() {
    return await getMyFbDocs<actualProjectT>('actual');
}

export async function addDocToFb<T>(collectionName: string, data: T) {
    return await addDoc(collection(firestore, collectionName), {data});
}

//todo check before use
export async function updDocAtFb<T>(collectionName: string, data: T) {
    return await updateDoc(doc(firestore, collectionName),
        {data}
    )
}

export async function delDocAtFb<T>(collectionName: string, data: T) {
    return await deleteDoc(doc(firestore, collectionName),)
}

//todo clean unused code

// export const getCollectionWithLimit = async <T>(collectionName: string, orderByElement: any, state: boolean, uidUser: string) => {
//     let datas: any[] = [];
//     const docs = await getDocs(query(collection(firestore, collectionName), where('complete', '==', state), where('uidUser', '==', uidUser), orderBy(orderByElement), limit(10)));
//     docs.forEach(
//         doc => {
//             const id = doc.id;
//             const data = doc.data();
//             datas.push({
//                 id,
//                 ...data,
//                 createdAt: new Date(data?.createdAt?.seconds * 1000) || null,
//                 dueAt: new Date(data.dueAt?.seconds * 1000) || null,
//                 updatedAt: new Date(data?.updatedAt?.seconds * 1000) || null
//             })
//         }
//     );
//     return datas as T[];
// }
//
// export const getCollectionAt = async <T>(collectionName: string, orderByElement: any, lastElement: any, state: boolean, uidUser: string) => {
//     let datas: any[] = [];
//     const lastDocSnap = await getDoc(doc(firestore, lastElement));
//     const docs = await getDocs(query(collection(firestore, collectionName), where('complete', '==', state), where('uidUser', '==', uidUser), orderBy(orderByElement), limit(10), startAfter(lastDocSnap)));
//
//     docs.forEach(
//         doc => {
//             const id = doc.id;
//             const data = doc.data();
//             datas.push({
//                 id,
//                 ...data,
//                 createdAt: new Date(data?.createdAt?.seconds * 1000) || null,
//                 dueAt: new Date(data.dueAt?.seconds * 1000) || null,
//                 updatedAt: new Date(data?.updatedAt?.seconds * 1000) || null
//             })
//         }
//     );
//     return datas as T[];
// }
//
// export const getDocument = async <T>(collectionName: string) => {
//     const document = getDoc(doc(firestore, collectionName));
//     return document.then(
//         doc => {
//             const id = doc.id;
//             const data = doc.data();
//
//             return {
//                 id,
//                 ...data,
//                 createdAt: new Date(data?.createdAt?.seconds * 1000) || null,
//                 dueAt: new Date(data?.dueAt?.seconds * 1000) || null,
//                 updatedAt: new Date(data?.updatedAt?.seconds * 1000) || null
//             };
//         }
//     )
// }
//
// export const addDocument = async <T>(collectionName: string, data: T) => {
//     return await addDoc(collection(firestore, collectionName), {data});
// }
//
// export const updateDocument = async <T>(collectionName: string, data: T) => {
//     return await updateDoc(doc(firestore, collectionName),
//         {data}
//     )
// }