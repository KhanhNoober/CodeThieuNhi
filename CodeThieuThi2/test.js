function demDonVi10(number) {
  switch (number) {
    case 0: return "không" ; break;
    case 1: return "một" ; break;
    case 2: return "hai" ; break;
    case 3: return "ba" ; break;
    case 4: return "bốn" ; break;
    case 5: return "năm" ; break;
    case 6: return "sáu" ; break;
    case 7: return "bảy" ; break;
    case 8: return "tám" ; break;
    case 9: return "chín" ; break;
    default: "Unknown"; break;
  }
}

function demDonVi(number) {
  switch (number) {
    case 0: return "" ; break;
    case 1: return "mốt" ; break;
    case 2: return "hai" ; break;
    case 3: return "ba" ; break;
    case 4: return "tư" ; break;
    case 5: return "lăm" ; break;
    case 6: return "sáu" ; break;
    case 7: return "bảy" ; break;
    case 8: return "tám" ; break;
    case 9: return "chín" ; break;
    default: "Unknown"; break;
  }
}

function demChuc(number) {
  if(number == 11)
    return "mười một";
  if(number < 20)
    return `mười ${demDonVi(number % 10)}`;
  else
    return `${demDonVi(Math.floor(number / 10))} mươi ${demDonVi(number % 10)}`;
}

function demTram(number) {
  if(number % 100 === 0)
    return demDonVi10(Math.floor(number / 100)) + " trăm";
  else {
    if(number % 100 < 10)
      return `${demDonVi10(Math.floor(number / 100))} trăm linh ${demSo(number % 100)}`;
    else
      return `${demDonVi10(Math.floor(number / 100))} trăm ${demChuc(number % 100)}`;
  }
}

function demBaSo(number) {
  if(number < 10)
    return demDonVi10(number);
  else if(number < 100) 
    return demChuc(number);
  else if(number < 1000)
    return demTram(number);
}

function demNghin(number) {
  let result = "";
  if(number % 1000 === 0) {
    result = `${demBaSo(Math.floor(number / 1000))} nghìn`;
    return result.replace(/ +/, " ");
  }
  result = `${demBaSo(Math.floor(number / 1000))} nghìn ${demTram(number % 1000)}`;
  return result.replace(/ +/, " ");
}

function demTrieu(number) {
  let result = "";
  if(number % 1000000 === 0) {
    result = `${demBaSo(Math.floor(number / 1000000))} triệu`;
    return result.replace(/ +/, " ");
  }
  result = `${demBaSo(Math.floor(number / 1000000))} triệu ${demNghin(number % 1000000)}`;
  return result.replace(/ +/, " ");
}

function demTi(number) {
  let result = "";
  if(number % 1000000000 === 0) {
    result = `${demBaSo(Math.floor(number / 1000000000))} tỉ`;
    return result.replace(/ +/, " ");
  }
  result = `${demBaSo(Math.floor(number / 1000000000))} tỉ ${demTrieu(number % 1000000000)}`;
  return result.replace(/ +/, " ");
}

function demNginTi(number) {
  let result = "";
  if(number % 1000000000000 === 0) {
    result = `${demBaSo(Math.floor(number / 1000000000000))} nghìn tỉ`;
    return result.replace(/ +/, " ");
  }
  result = `${demNghin(Math.floor(number / 1000000000))} tỉ ${demTrieu(number % 1000000000)}`;
  return result.replace(/ +/, " ");
}

function demSo(number) {
  if(number < 1000)
    return demBaSo(number);
  else if(number < 1000000)
    return demNghin(number);
  else if(number < 1000000000)
    return demTrieu(number);
  else if(number < 1000000000000)
    return demTi(number);
  else if(number < 1000000000000000)
    return demNginTi(number);
}

for (let index = 111289523447598; index < 111289523447698; index++) {
  console.log(demSo(index));
}