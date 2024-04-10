import {Constants} from 'expo-constants'

async function fetchDataSearch(params) {
  try {
 
    if (typeof params !== 'object') {
      throw new Error('Se esperaba un objeto como entrada.');
    }

    const apiUrl = 'http://www.omdbapi.com/?apikey=10fdf75b&';

    const url = new URL(apiUrl);
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });

    let urlStr = url.toString();
    console.log(urlStr);

    const response = await fetch(urlStr);
    const data = await response.json();

    if (data.Error) {
      throw new Error(data.Error);
    }
   
    if (data.Search) {
      return data.Search
    } else { 
      return {}; 
    }
  } catch (error) {
    throw error;
  }
}


async function fetchDataMovie(params) {
  try {
 
    if (typeof params !== 'object') {
      throw new Error('Se esperaba un objeto como entrada.');
    }

    const apiUrl = 'http://www.omdbapi.com/?apikey=10fdf75b&';

    const url = new URL(apiUrl);
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });

    let urlStr = url.toString();
    console.log(urlStr);

    const response = await fetch(urlStr);
    const data = await response.json();

    if (data.Error) {
      throw new Error(data.Error);
    }
   
    if (data) {
      return data
    } else { 
      return {}; 
    }
  } catch (error) {
    throw error;
  }
}


export async function searchMovies(title, options = {}) {
  const params = {
    s: title,
    ...options,
  };

  if (options.type && !['movie', 'series', 'episode'].includes(options.type)) {
    throw new Error('Tipo de contenido no válido.');
  }
  if (options.year && isNaN(options.year)) {
    throw new Error('El año debe ser un número.');
  }
  if (options.page && isNaN(options.page)) {
    throw new Error('La página debe ser un número.');
  }

  return await fetchDataSearch(params);
}


export async function getMovieById(id, title, options = {}) {
  const params = {
    i: id,
    t: title,
    ...options,
  };
  // Validar parámetros opcionales
  if (options.type && !['movie', 'series', 'episode'].includes(options.type)) {
    throw new Error('Tipo de contenido no válido.');
  }
  if (options.plot && !['short', 'full'].includes(options.plot)) {
    throw new Error('El tipo de trama debe ser "short" o "full".');
  }
  let returnData =  await fetchDataMovie(params);
  // let cleanMovieData = removeQuotesFromKeys(returnData)
  return returnData
}

const removeQuotesFromKeys= (obj) => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key.replace(/"/g, ''), value])
  );
}