import {app} from './firebaseConfig';
import {
    addDoc,
    collection,
    doc,
    deleteDoc,
    getDoc,
    getDocs,
    getFirestore,
    updateDoc,
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

export async function updDocAtFb<T>(collectionName: string, data: T) {
    return await updateDoc(doc(firestore, collectionName),
        {data}
    )
}

export async function delDocAtFb<T>(collectionName: string, data: T) {
    return await deleteDoc(doc(firestore, collectionName),)
}
