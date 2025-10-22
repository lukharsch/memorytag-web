<template>
  <div
    class="flex justify-center items-center flex-col text-center p-4 bg-white"
  >
    <NuxtLink to="/"><img src="/logo.svg" class="h-10 my-4" /></NuxtLink>
    <h1 class="text-3xl mt-6">Impressum</h1>

    <p>Angaben gemäß § 5 TMG</p>

    <p>
      Lukas Harsch<br />
      Ränkle 1<br />
      88456 Ingoldingen
    </p>

    <p>
      Kontakt<br />
      Telefon: +49 1515 6033702<br />
      E-Mail: lukas@lukasharsch.com
    </p>

    <p>
      Umsatzsteuer-ID<br />
      Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
      DE363203900
    </p>

    <p>
      Verbraucherstreitbeilegung / Universalschlichtungsstelle<br />
      Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
      einer Verbraucherschlichtungsstelle teilzunehmen.
    </p>

    <p>Quelle: e-recht24.de</p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
p {
  margin: 1rem;
}
</style>
