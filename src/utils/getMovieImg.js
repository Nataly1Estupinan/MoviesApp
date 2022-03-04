const placeholder="https://images.unsplash.com/photo-1634403665481-74948d815f03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";


export function getMovieImg(path, width){
    return path
    ? `https://image.tmdb.org/t/p/w${width}${path}`
  : placeholder

}