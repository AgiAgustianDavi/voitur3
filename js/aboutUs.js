let currentKey = null; // Variabel penanda apakah paragraf sudah ditambahkan atau belum

const textFunctions = {
    aboutUs: 'Selamat datang di Voitur3! Kami adalah sebuah tim dari sekelompok mahasiswa yang terinspirasi oleh keindahan dan teknologi yang disediakan oleh perusahaan-perusahaan otomotif yang di tuangkan pada mobil - mobil yang dikeluarkannya. Situs web ini adalah hasil upaya kami untuk menyajikan informasi tentang mobil mewah yang diproduksi oleh perusahaan otomotif ternama di dunia. Kami berupaya untuk menghadirkan pengalaman luar bisa dalam menjelajahi proyek website kami yang informatif dan inovatif. Terdapat beberapa jenis mobil mewah yang diproduksi oleh perusahaan otomotif ternama didunia, seperti Ferrari, Lamborghini dan lainnya. Dalam website ini, anda akan menemukan informasi tentang beberapa jenis dan model mobil yang kami pilih.',
    mission: 'Misi kami sudah jelas dan sederhana, yaitu kami ingin menghargai dan memahami beraneka ragam mobil mewah dari berbagai sudut pandang. Kami meyakini bahwa orang orang memiliki potensi untuk menghargai dan memahami kelebihan dan keindahan dari jenis mobil yang dikeluarkan oleh perusahaan otomotif ternama tersebut.',
    goals: 'Tujuan kami adalah memberikan informasi yang bersifat inspirasi dan informatif. Kami ingin membantu anda memahami alasan mengapa hal ini di anggap sebagai pencapaian yang luar biasa dalam dunia otomotif. Kami ingin berterima kasih kepada semua pembaca yang telah mendukung kami dalam pengembangan situs web ini. Dukungan anda semua terhadap situs web ini sangat berarti bagi kami agar kami tetap semangat untuk terus melakukan update agar website ini akan menampilkan lebih banyak lagi informasi informasi dalam dunia otomotif. Terimakasih atas kunjungan anda, kami harap anda menemukan informasi yang informatif dan inspiratif dalam setiap halaman website kami.'
};

function toggleText(key) {
    const text = document.getElementById('text');


    // Jika key yang diklik adalah key yang sedang ditampilkan, hapus teksnya
    if (currentKey === key) {
        while (text.firstChild) {
            text.removeChild(text.firstChild);
        }
        currentKey = null; // Atur currentKey menjadi null karena teks telah dihapus
        return; // Keluar dari fungsi setelah menghapus teks
    }

    // Jika key yang diklik berbeda dari key yang sedang ditampilkan, tampilkan teks baru
    const newParagraph = document.createElement('p');
    newParagraph.textContent = textFunctions[key];

    // Hapus teks sebelumnya jika ada
    while (text.firstChild) {
        text.removeChild(text.firstChild);
    }

    // Tambahkan teks baru
    text.appendChild(newParagraph);
    currentKey = key; // Atur currentKey menjadi key yang sedang ditampilkan
}


const allStar = document.querySelectorAll('.rating .star');
const ratingValue = document.querySelector('.rating input');
const resultText = document.getElementById('result');

allStar.forEach((item, idx)=> {
    item.addEventListener('click', function(){
        let click = 0;
        ratingValue.value = idx + 1;
        console.log(ratingValue.value);
        allStar.forEach(i=>{
            i.classList.replace('bxs-star','bx-star' );
            i.classList.remove('active');
        });



        for(let i=0; i<allStar.length; i++){
            if(i <= idx){
                allStar[i].classList.replace('bx-star','bxs-star');
                allStar[i].classList.add('active');
            }else{
                allStar[i].style.setProperty('--i',click);
                click++
            }
        }
        
        switch (ratingValue.value) {
            case '1':
                resultText.textContent = 'Ada masalah hidup apa ??';
                break;
            case '2':
                resultText.textContent = 'Parah kok kasih bintang 2 sih !';
                break;
            case '3':
                resultText.textContent = 'Hemm, kok 3? agak gimana yaa';
                break;
            case '4':
                resultText.textContent = 'Senang dapat bintang 4, udah bagus kok';
                break;
            case '5':
                resultText.textContent = 'Mak, tugas kami bintang 5 mak!! ';
                break;
            default:
                resultText.textContent = '';
                break;
        }
    });
});

