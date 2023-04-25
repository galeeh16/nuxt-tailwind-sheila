<template>
  <div>
    <ClientOnly>
      <Carousel />
    </ClientOnly>

    <div :class="container" class="pt-8 lg:pt-14">

      <Heading3 title="Apa yang bisa kami bantu?" />

      <MotifGradient />

      <div class="pt-10">
        <div class="grid lg:grid-cols-2 gap-6 lg:gap-10">
          <div class="shadow-lg rounded-xl p-4 md:p-8 bg-white">
            <div class="flex items-center gap-2 lg:gap-3">
              <div class="p-2 lg:p-3 bg-softPrimary rounded-xl">
                <Icon name="heroicons-outline:currency-dollar" class="text-primary text-xl lg:text-4xl" />
              </div>
              <p class="font-semibold text-xl text-primary lg:text-2xl">Berinvestasi di Dubai</p>
            </div>
            <p class="mt-4 lg:mt-6">Kami menyediakan berbagai layanan bagi siapa saja yang tertarik untuk berinvestasi
              di pasar <i>Real Estate Dubai</i> dan mengamankan
              <i>"Golden Visa"</i> atau izin tinggal jangka panjang. Ada peluang investasi yang sangat baik tersedia
              untuk semua rentang biaya/anggaran.
            </p>

            <p class="mt-4 leading-7">Kami di sini untuk mendukung apakah Anda :</p>
            <ul class="list-disc pl-4 leading-7">
              <li>Membutuhkan panduan tentang peluang investasi terbaik di Dubai berdasarkan biaya/anggaran.</li>
              <li>Memahami tren pasar saat ini, <i>ROI (Return of Investment)</i> dan peluang bisnis.
              </li>
              <li>Membutuhkan dukungan penuh <i>end-to-end</i> termasuk konsultasi lebih lanjut, tampilan properti dan
                evaluasi, eksekusi dari proses pembelian, visa tinggal <i>"golden visa"</i>, dan bahkan
                manajemen properti sesudahnya.</li>
            </ul>
          </div>

          <div class="shadow-lg rounded-xl p-4 md:p-8 bg-white">
            <div class="flex items-center gap-2 lg:gap-3">
              <div class="p-2 lg:p-3 bg-softPrimary rounded-xl">
                <Icon name="heroicons-outline:home-modern" class="text-primary text-xl lg:text-4xl" />
              </div>
              <p class="font-semibold text-xl text-primary lg:text-2xl">Pindah ke Dubai</p>
            </div>
            <p class="mt-4 lg:mt-6 leading-7">Ingin tahu bagaimana cara pindah ke Dubai? Apakah Anda datang dari luar
              negeri,
              pindah untuk bekerja atau untuk awal yang baru, kami akan berada di sana di setiap langkah</p>

            <ul class="list-disc pl-4 leading-7 mt-4">
              <li>Pindah dan tinggal di Dubai, apa yang diharapkan</li>
              <li>Menetap dan Berorientasi</li>
              <li>Akomodasi dan biaya pindah ke Dubai</li>
              <li>Sistem pendidikan dan sekolah di Dubai</li>
              <li>Berbagai jenis izin tinggal</li>
              <li>Mempersiapkan rumah</li>
            </ul>

          </div>

          <div class="shadow-lg rounded-xl p-4 md:p-8 bg-white">
            <div class="flex items-center gap-2 lg:gap-3">
              <div class="p-2 lg:p-3 bg-softPrimary rounded-xl">
                <Icon name="heroicons-outline:shopping-bag" class="text-primary text-xl lg:text-4xl" />
              </div>
              <p class="font-semibold text-xl text-primary lg:text-2xl">Melakukan Bisnis di Dubai</p>
            </div>
            <p class="mt-4 lg:mt-6">Kami memiliki jaringan yang luas untuk konsultasi dan membantu Anda dalam
              mendirikan bisnis dan rekening bank di Dubai.</p>
          </div>

          <div class="shadow-lg rounded-xl p-4 md:p-8 bg-white">
            <div class="flex items-center gap-2 lg:gap-3">
              <div class="p-2 lg:p-3 bg-softPrimary rounded-xl">
                <Icon name="heroicons-outline:location-marker" class="text-primary text-xl lg:text-4xl" />
              </div>
              <p class="font-semibold text-xl text-primary lg:text-2xl">Mengunjungi Dubai</p>
            </div>
            <p class="mt-4 lg:mt-6">
              Kami mendukung kebutuhan individu, keluarga, dan perusahaan untuk mendapatkan yang terbaik untuk
              tinggal di Dubai. Kami di sini untuk mendukung Anda apakah Anda hanya sekedar mencari saran atau apakah
              Anda membutuhkan dukungan penuh dalam mengatur dan mengelola semua aspek waktu inap Anda. Kami disini
              untuk membantu</p>

            <p class="mt-4 lg:mt-6">Kami tahu betapa sulitnya merencanakan, kami menilai kebutuhan unik setiap klien.
              Tim kami menawarkan saran dan solusi praktis untuk setiap aspek dari langkah Anda.
              Kami bangga pada kemampuan kami untuk membantu perorangan, keluarga dan peusahaan untuk membuat
              keputusan,
              memudahkan dan mengurangi pengeluaran yang tidak perlu.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { container } from '~/constants/style';
// import { Motion } from 'motion/vue';

const rotation = ref(0);
</script>
