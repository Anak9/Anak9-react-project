export const loadPosts = async () => {

    const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');

    const photosResponse = await fetch('https://jsonplaceholder.typicode.com/photos');

    const posts = await postsResponse.json(); // tamanho 100
    const photos = await photosResponse.json(); // tamanho 5000

    // estamos fazendo um zipper(unindo dois arrays de tamanhos diferentes) pegando tudo dentro de posts e
    const postsAndPhotos = posts.map((post, index) => {
        return { ...post, cover: photos[index].url }
    });

    return postsAndPhotos;
}