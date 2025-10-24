<template>
  <section
    class="black z-[999] grid w-full grid-cols-[1fr_max-content_1fr] items-center justify-between border-b border-b-neutral-600 bg-scheme-background px-[5%] md:min-h-18 navbar"
  >
    <!--<button class="flex size-12 flex-col justify-center lg:hidden">
    <span class="my-[3px] h-0.5 w-6 bg-neutral-950 lg:hidden"></span
    ><span class="my-[3px] h-0.5 w-6 bg-neutral-950 lg:hidden"></span
    ><span class="my-[3px] h-0.5 w-6 bg-neutral-950 lg:hidden"></span>
    </button>-->
    <div class="flex-size-12 lg:hidden"></div>
    <div
      class="absolute top-0 left-0 z-50 flex h-dvh w-[90%] flex-col border-r text-neutral-300 border-b-neutral-600 px-[5%] pb-4 md:w-[80%] lg:visible lg:static lg:-ml-4 lg:flex lg:h-auto lg:w-auto lg:flex-row lg:border-none lg:px-0 lg:pb-0 lg:[--opacity-closed:100%] lg:[--x-closed:0%]"
      style="
        opacity: var(--opacity-closed, 0%);
        transform: translateX(var(--x-closed, -100%));
      "
    >
      <a href="#" class="mt-10 mb-8 flex shrink-0 lg:hidden">
        <img src="/logo-white.svg" alt="Logo image" />
      </a>
      <a
        href="#funktionsweise"
        class="text-regular relative block py-3 lg:px-4 lg:py-2"
      >
        Funktion
      </a>
      <a
        href="#anwendungsbeispiele"
        class="text-regular relative block py-3 lg:px-4 lg:py-2"
      >
        Anwendungsbeispiele
      </a>
      <a
        href="#unterstutzen"
        class="text-regular relative block py-3 lg:px-4 lg:py-2"
      >
        Unterstützen
      </a>
      <!--<button
        data-slot="button"
        class="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-neutral-950 bg-neutral-950 text-white px-5 py-2 mt-6 w-full lg:hidden"
        title="Menu"
    >
      Menu
    </button>-->
    </div>
    <a href="#" class="flex min-h-16 shrink-0 items-center"
      ><img src="/logo-white.svg" alt="Logo image" class="h-10"
    /></a>
    <div class="flex min-h-16 items-center justify-end gap-x-4 max-sm:hidden">
      <!--<a href="https://my-momentify.de">
        <img
          src="/icons/shopping-cart.svg"
          alt="Shopping Cart"
          class="h-6 w-6"
        />
      </a>-->
      <!--<a
          data-slot="button"
          class="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-neutral-300 bg-neutral-950 text-neutral-300 px-4 py-1 md:px-6 md:py-2"
          title="Shop"
          role="button"
          href="https://my-momentify.de"
          target="_blank"
        >
          Shop
        </a>-->
    </div>
  </section>

  <section class="pt-16 md:py-24 lg:py-28 hero">
    <div class="container m-auto">
      <div
        class="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 md:grid-cols-2 lg:items-center text-neutral-300"
      >
        <div class="px-[5%]">
          <h1 class="text-4xl mb-5 font-bold md:mb-6">
            Deine Momente.<br />
            Für immer bei dir.
          </h1>
          <p class="text-md">
            Ein MemoryTag verbindet physische Produkte mit deinen schönsten
            Erinnerungen – damit besondere Augenblicke nicht in Vergessenheit
            geraten, und du sie digital wiedererleben kannst.
          </p>
          <div class="mt-6 flex flex-wrap gap-4 md:mt-8">
            <!--<a
              data-slot="button"
              class="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-[var(--primary-color)] bg-[var(--primary-color)] text-white px-6 py-3"
              title="Warteliste"
              role="button"
              href="https://my-momentify.de"
              target="_blank"
            >
              Warteliste
            </a>-->
            <a
              data-slot="button"
              class="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-neutral-300 bg-scheme-background text-scheme-text px-6 py-3"
              title="Mehr erfahren"
              role="button"
              href="#funktionsweise"
            >
              Mehr erfahren
            </a>
          </div>
        </div>
        <div>
          <img
            src="/hero.webp"
            class="w-full rounded-image object-cover max-md:visible hidden max-md:block"
            alt="Relume placeholder image"
          />
        </div>
      </div>
    </div>
  </section>

  <section class="px-[5%] py-16 md:py-24 lg:py-28" id="funktionsweise">
    <div class="container">
      <div class="flex flex-col items-center">
        <div class="mb-12 w-full max-w-xl text-center md:mb-18 lg:mb-20">
          <p class="mb-3 font-semibold md:mb-4 text-[var(--primary-color)]">
            Der MemoryTag
          </p>
          <h2 class="text-3xl mb-5 font-bold md:mb-6">
            Kleiner NFC-Chip. Große Wirkung.
          </h2>
          <p class="text-md">
            Kennst du das? Du erlebst etwas Besonderes und hältst diese Momente
            mit vielen Bildern und Videos fest. Auch nach einigen Monaten, oder
            auch Jahren, sind diese Erinnerungen noch immer besonders, aber
            nicht griffbereit und irgendwo unter einer Vielzahl an Dateien im
            Nirvana verschwunden. Wir möchten nicht, dass solche unvergesslichen
            Erlebnisse ihre Bedeutung verlieren. An die schönen Dinge im Leben
            sollte man sich noch lange erinnern. Und hierbei hilft dir dein
            MemoryTag.
          </p>
        </div>
        <div
          class="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-2 lg:grid-cols-4 md:gap-x-8 md:gap-y-16 lg:gap-x-12"
        >
          <div class="flex w-full flex-col items-center text-center">
            <div class="mb-5 md:mb-6">
              <img src="/icons/circle-plus-2.svg" alt="" class="size-12" />
            </div>
            <h3 class="text-xl mb-5 font-bold md:mb-6 text-pretty">
              Überall einsetzbar - unsichtbar anzubringen
            </h3>
          </div>
          <div class="flex w-full flex-col items-center text-center">
            <div class="mb-5 md:mb-6">
              <img src="/icons/tools.svg" alt="" class="size-12" />
            </div>
            <h3 class="text-xl mb-5 font-bold md:mb-6 text-pretty">
              Kinderleichtes Setup - in Sekunden einsatzbereit
            </h3>
          </div>
          <div class="flex w-full flex-col items-center text-center">
            <div class="mb-5 md:mb-6">
              <img src="/icons/mood-smile-beam.svg" alt="" class="size-12" />
            </div>
            <h3 class="text-xl mb-5 font-bold md:mb-6 text-pretty">
              Ohne Abo. Ohne App. Ohne Werbung
            </h3>
          </div>
          <div class="flex w-full flex-col items-center text-center">
            <div class="mb-5 md:mb-6">
              <img src="/icons/heart.svg" alt="" class="size-12" />
            </div>
            <h3 class="text-xl mb-5 font-bold md:mb-6 text-pretty">
              Jederzeit aufrufbar
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="px-[5%] py-16 md:py-24 lg:py-28">
    <div class="container">
      <div class="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
        <p class="mb-3 font-semibold md:mb-4 text-[var(--primary-color)]">
          Funktionsweise
        </p>
        <h1 class="text-3xl mb-5 font-bold md:mb-6">
          Wie funktioniert der MemoryTag?
        </h1>
        <p class="text-md">
          Drei einfache Schritte, um deine Lieblingsmomente über den MemoryTag
          immer wieder neu zu erleben.
        </p>
      </div>
      <div class="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
        <div
          data-slot="card"
          class="overflow-hidden rounded-card border border-neutral-950 bg-scheme-foreground text-scheme-text flex flex-col"
        >
          <div
            class="flex w-full flex-col items-center justify-center self-start"
          >
            <img
              src="/howto/schritt1.webp"
              alt="Relume placeholder image 1"
              class="object-cover"
              style="aspect-ratio: 8 / 10"
            />
          </div>
          <div class="flex flex-1 flex-col justify-center p-6 md:p-8">
            <div>
              <p class="mb-2 font-semibold">Schritt 1</p>
              <h2 class="text-xl mb-3 font-bold md:mb-4">
                Den MemoryTag an ein beliebiges Objekt anbringen
              </h2>
              <p>
                ... ganz einfach mit den mitgelieferten Klebestreifen.
                Inspirationen findest du hier.
              </p>
            </div>
          </div>
        </div>
        <div
          data-slot="card"
          class="overflow-hidden rounded-card border border-neutral-950 bg-scheme-foreground text-scheme-text flex flex-col"
        >
          <div
            class="flex w-full flex-col items-center justify-center self-start"
          >
            <img
              src="/howto/schritt2.webp"
              alt="Relume placeholder image 1"
              class="object-cover"
              style="aspect-ratio: 8 / 10"
            />
          </div>
          <div class="flex flex-1 flex-col justify-center p-6 md:p-8">
            <div>
              <p class="mb-2 font-semibold">Schritt 2</p>
              <h2 class="text-xl mb-3 font-bold md:mb-4">Medien hochladen</h2>
              <p>
                ... in deinem persönlichen Adminbereich. Ganz egal ob zum
                Beispiel Bilder oder Videos.
              </p>
            </div>
          </div>
        </div>
        <div
          data-slot="card"
          class="overflow-hidden rounded-card border border-neutral-950 bg-scheme-foreground text-scheme-text flex flex-col"
        >
          <div
            class="flex w-full flex-col items-center justify-center self-start"
          >
            <img
              src="/howto/schritt3.webp"
              alt="Relume placeholder image 1"
              class="object-cover"
              style="aspect-ratio: 8 / 10"
            />
          </div>
          <div class="flex flex-1 flex-col justify-center p-6 md:p-8">
            <div>
              <p class="mb-2 font-semibold">Schritt 3</p>
              <h2 class="text-xl mb-3 font-bold md:mb-4">
                Erinnerungen wieder erleben
              </h2>
              <p>
                ...indem du einfach dein Smartphone für einen kurze Moment an
                den MemoryTag hältst. Das digitale Album öffnet sich nun
                automatisch - keine App nötig.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
    id="anwendungsbeispiele"
    class="px-[5%] pt-16 pb-0 md:pt-24 lg:pt-28"
  >
    <div class="container">
      <div class="flex flex-col items-center">
        <div class="mb-12 w-full max-w-lg text-center md:mb-18">
          <p class="mb-3 font-semibold md:mb-4 text-[var(--primary-color)]">
            Anwendungsbeispiele
          </p>
          <h2 class="text-3xl mb-5 font-bold md:mb-6">
            Wo kann ich den MemoryTag einsetzen?
          </h2>
          <p class="text-md">Die Frage ist eher: Wo nicht?</p>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="sticky top-0">
      <div class="bg-white sticky pb-0 top-0 sm:max-md:min-h-[100dvh]">
        <div class="px-6 md:pb-12">
          <div class="container">
            <span class="flex h-16 w-full items-center underline">
              <span class="text-md mr-5 font-semibold md:mr-6">01</span>
              <span class="text-md font-semibold"> Die Weltreise! </span>
            </span>
            <div class="pb-12 pt-2 lg:py-8">
              <div
                class="grid grid-cols-1 gap-y-6 md:items-center md:gap-x-12 lg:grid-cols-2 lg:gap-x-20"
              >
                <div>
                  <h2 class="text-2xl lg:text-3xl mb-5 font-bold md:mb-6">
                    So viel erlebt - und du steckst nur Fähnchen in die
                    besuchten Länder?
                  </h2>
                  <p class="text-md">
                    Ein großes Hobby von dir ist das Reisen und du markierst auf
                    einer Weltkarte, wo du bereits überall warst. Mache diese
                    Markierung doch mit einem "Flaggen-MemoryTag". Eventuell
                    fragst nicht nur du dich in 5 Jahren, was nochmal die
                    schönsten Erlebnisse in Südafrika waren, sondern auch deine
                    Freunde würden gerne Tipps haben. Einfach den MemoryTag
                    antippen und schon hast du die Highlights wieder auf einen
                    Blick sichtbar. - Der Augenblick als du den Löwen gesehen
                    hast, der Blick auf Kapstadt oder auch die Route der
                    Rundreise.
                  </p>
                </div>
                <div class="relative">
                  <img
                    src="/anwendung/reisen.webp"
                    class="w-full rounded-image object-cover"
                    style="aspect-ratio: 16 / 10"
                    alt="Karte der Welt mit dem MemoryTag auf Südafrika"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="border-t border-neutral-950 bg-white sticky pb-0 top-16 mb-4 sm:max-md:min-h-[100dvh]"
      >
        <div class="px-6 md:pb-12">
          <div class="container">
            <span class="flex h-16 w-full items-center underline">
              <span class="text-md mr-5 font-semibold md:mr-6">02</span>
              <span class="text-md font-semibold">Ja, ich will!</span>
            </span>
            <div class="pb-12 pt-2 lg:py-8">
              <div
                class="grid grid-cols-1 gap-y-6 md:items-center md:gap-x-12 lg:grid-cols-2 lg:gap-x-20"
              >
                <div>
                  <h2 class="text-2xl lg:text-3xl mb-5 font-bold md:mb-6">
                    Eure Hochzeit - ein unvergesslicher Tag!
                  </h2>
                  <p class="text-md">
                    So viele tolle Momente und das an nur einem Tag. Das Bild
                    der Fotografin ist natürlich wunderschön und wird
                    dementsprechendauch auf eine Fotoleinwand gedruckt. Aber was
                    ist mit den anderen einzigartigen Augenblicken an diesem
                    Tag? - Wie ihr euch das JA-Wort gebt? Das witzige Selfie von
                    der Party? Oder das Video vom Hochzeitstanz? Mit MemoryTag
                    kannst du den schönsten Tag deines Lebens, mit all den
                    unvergessliche Momenten, immer wieder erleben.
                  </p>
                </div>
                <div class="relative">
                  <img
                    src="/anwendung/hochzeit.webp"
                    class="w-full rounded-image object-cover"
                    style="aspect-ratio: 16 / 10"
                    alt="Bild von Brautpaar eingerahmt, mit MemoryTag unten rechts auf dem Rahmen"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="border-t border-neutral-950 bg-white sticky pb-0 top-32 mb-4 sm:max-md:min-h-[100dvh]"
      >
        <div class="px-6 md:pb-12">
          <div class="container">
            <span class="flex h-16 w-full items-center underline">
              <span class="text-md mr-5 font-semibold md:mr-6">03</span>
              <span class="text-md font-semibold">Neuer Lebensabschnitt!</span>
            </span>
            <div class="pb-12 pt-2 lg:py-8">
              <div
                class="grid grid-cols-1 gap-y-6 md:items-center md:gap-x-12 lg:grid-cols-2 lg:gap-x-20"
              >
                <div>
                  <h2 class="text-2xl lg:text-3xl mb-5 font-bold md:mb-6">
                    Dein Hausbau. Eine Zeit zum nicht-vergessen!
                  </h2>
                  <p class="text-md">
                    Stell dir vor: Du baust ein Haus und in 10 Jahren kannst du
                    deinen Kindern davon nur noch erzählen, weil alle Fotos
                    irgendwo unsortiert in der Cloud liegen. Nicht mit uns!
                    Bringe den MemoryTag irgendwo im Haus an, z.B. an der
                    Innenseite der Schlafzimmertüre. Und schon kannst du später
                    deinem Kind zeigen, wie der Kran kam und das Haus
                    aufgestellt hat oder wie ihr den Boden in seinem Zimmer
                    verlegt habt.
                  </p>
                </div>
                <div class="relative">
                  <img
                    src="/anwendung/hausbau.webp"
                    class="w-full rounded-image object-cover"
                    style="aspect-ratio: 16 / 10"
                    alt="Baustelle im Hintergrund mit MemoryTag im Vordergrund"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="border-t border-neutral-950 bg-white sticky pb-0 top-48 sm:max-md:min-h-[100dvh]"
      >
        <div class="px-6 md:pb-12">
          <div class="container">
            <span class="flex h-16 w-full items-center underline">
              <span class="text-md mr-5 font-semibold md:mr-6">04</span>
              <span class="text-md font-semibold"> Ein kleines Wunder! </span>
            </span>
            <div class="pb-12 pt-2 lg:py-8">
              <div
                class="grid grid-cols-1 gap-y-6 md:items-center md:gap-x-12 lg:grid-cols-2 lg:gap-x-20"
              >
                <div>
                  <h2 class="text-2xl lg:text-3xl mb-5 font-bold md:mb-6">
                    Von der Geburt bis zu den ersten eigenen Schritten.
                  </h2>
                  <p class="text-md">
                    Vor allem im ersten Lebensjahr deines Kindes passiert so
                    viel. Das erste Lachen und die ersten Wörter, die ersten
                    Gehversuche und die ersten Zähne oder einfach nur ein
                    Schnappschuss des süßestens Lächeln auf der Welt. Alles
                    Momente, die auch in vielen Jahren noch besonders sind. Für
                    dich und dein Kind. Befestige den MemoryTag z.B. an dem
                    Lieblingskuscheltier von damals und dein Kind hat später
                    eine einzigartige Erinnerungen an sein erstes Lebensjahr.
                    Ganz egal ob Bild oder Video.
                  </p>
                </div>
                <div class="relative">
                  <img
                    src="/anwendung/kind.webp"
                    class="w-full rounded-image object-cover"
                    style="aspect-ratio: 16 / 10"
                    alt="Teddybär im Vordergrund, krabbelndes Kleinkind im Hintergrund"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="team" class="px-[5%] py-16 md:py-24 lg:py-28">
    <div class="container">
      <div class="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
        <p class="mb-3 font-semibold md:mb-4 text-[var(--primary-color)]">
          Hey!
        </p>
        <h2 class="text-3xl mb-5 font-bold md:mb-6">Wer bin ich?</h2>
        <p class="text-md">
          Ich bin selber Kunden meines Produktes - deshalb stecke ich all meine
          Passion rein.
        </p>
      </div>
      <div
        class="grid grid-cols-1 items-start justify-center gap-x-8 gap-y-12 md:grid-cols-1 md:gap-x-8 md:gap-y-16 lg:gap-x-12"
      >
        <div class="flex flex-col text-center">
          <div class="mb-5 flex w-full items-center justify-center md:mb-6">
            <img
              src="/lukas.webp"
              alt="Lukas Harsch, Gründer MemoryTag"
              class="size-20 min-h-20 min-w-20 md:size-36 rounded-full object-cover"
            />
          </div>
          <div class="mb-3 md:mb-4">
            <h5 class="text-large font-semibold">Lukas Harsch</h5>
            <h6 class="text-md">Gründer, Software, Hardware</h6>
          </div>
        </div>
        <!--<div class="flex flex-col text-center">
          <div class="mb-5 flex w-full items-center justify-center md:mb-6">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              alt="Relume placeholder image 1"
              class="size-20 min-h-20 min-w-20 rounded-full object-cover"
            />
          </div>
          <div class="mb-3 md:mb-4">
            <h5 class="text-large font-semibold">Nicole Harsch</h5>
            <h6 class="text-md">Gründerin, Marketing, Werbung</h6>
          </div>
          <div
            class="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center"
          >
            <a href="#"
              ><svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="size-6"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"
                ></path></svg></a
            ><a href="#"
              ><svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                class="size-6 p-0.5"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                ></path></svg></a
            ><a href="#"
              ><svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="size-6"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.66 6.98a9.932 9.932 0 0 0-3.641-3.64C15.486 2.447 13.813 2 12 2s-3.486.447-5.02 1.34c-1.533.893-2.747 2.107-3.64 3.64S2 10.187 2 12s.446 3.487 1.34 5.02a9.924 9.924 0 0 0 3.641 3.64C8.514 21.553 10.187 22 12 22s3.486-.447 5.02-1.34a9.932 9.932 0 0 0 3.641-3.64C21.554 15.487 22 13.813 22 12s-.446-3.487-1.34-5.02zM12 3.66c2 0 3.772.64 5.32 1.919-.92 1.174-2.286 2.14-4.1 2.9-1.002-1.813-2.088-3.327-3.261-4.54A7.715 7.715 0 0 1 12 3.66zM5.51 6.8a8.116 8.116 0 0 1 2.711-2.22c1.212 1.201 2.325 2.7 3.34 4.5-2 .6-4.114.9-6.341.9-.573 0-1.006-.013-1.3-.04A8.549 8.549 0 0 1 5.51 6.8zM3.66 12c0-.054.003-.12.01-.2.007-.08.01-.146.01-.2.254.014.641.02 1.161.02 2.666 0 5.146-.367 7.439-1.1.187.373.381.793.58 1.26-1.32.293-2.674 1.006-4.061 2.14S6.4 16.247 5.76 17.5c-1.4-1.587-2.1-3.42-2.1-5.5zM12 20.34c-1.894 0-3.594-.587-5.101-1.759.601-1.187 1.524-2.322 2.771-3.401 1.246-1.08 2.483-1.753 3.71-2.02a29.441 29.441 0 0 1 1.56 6.62 8.166 8.166 0 0 1-2.94.56zm7.08-3.96a8.351 8.351 0 0 1-2.58 2.621c-.24-2.08-.7-4.107-1.379-6.081.932-.066 1.765-.1 2.5-.1.799 0 1.686.034 2.659.1a8.098 8.098 0 0 1-1.2 3.46zm-1.24-5c-1.16 0-2.233.047-3.22.14a27.053 27.053 0 0 0-.68-1.62c2.066-.906 3.532-2.006 4.399-3.3 1.2 1.414 1.854 3.027 1.96 4.84-.812-.04-1.632-.06-2.459-.06z"
                ></path></svg
            ></a>
          </div>
        </div>-->
        <!--<div class="flex flex-col text-center">
          <div class="mb-5 flex w-full items-center justify-center md:mb-6">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              alt="Relume placeholder image 1"
              class="size-20 min-h-20 min-w-20 rounded-full object-cover"
            />
          </div>
          <div class="mb-3 md:mb-4">
            <h5 class="text-large font-semibold">Johannes Harsch</h5>
            <h6 class="text-md">Gründer, Shop, Finanzen</h6>
          </div>
          <div
            class="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center"
          >
            <a href="#"
              ><svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="size-6"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"
                ></path></svg></a
            ><a href="#"
              ><svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                class="size-6 p-0.5"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                ></path></svg></a
            ><a href="#"
              ><svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="size-6"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.66 6.98a9.932 9.932 0 0 0-3.641-3.64C15.486 2.447 13.813 2 12 2s-3.486.447-5.02 1.34c-1.533.893-2.747 2.107-3.64 3.64S2 10.187 2 12s.446 3.487 1.34 5.02a9.924 9.924 0 0 0 3.641 3.64C8.514 21.553 10.187 22 12 22s3.486-.447 5.02-1.34a9.932 9.932 0 0 0 3.641-3.64C21.554 15.487 22 13.813 22 12s-.446-3.487-1.34-5.02zM12 3.66c2 0 3.772.64 5.32 1.919-.92 1.174-2.286 2.14-4.1 2.9-1.002-1.813-2.088-3.327-3.261-4.54A7.715 7.715 0 0 1 12 3.66zM5.51 6.8a8.116 8.116 0 0 1 2.711-2.22c1.212 1.201 2.325 2.7 3.34 4.5-2 .6-4.114.9-6.341.9-.573 0-1.006-.013-1.3-.04A8.549 8.549 0 0 1 5.51 6.8zM3.66 12c0-.054.003-.12.01-.2.007-.08.01-.146.01-.2.254.014.641.02 1.161.02 2.666 0 5.146-.367 7.439-1.1.187.373.381.793.58 1.26-1.32.293-2.674 1.006-4.061 2.14S6.4 16.247 5.76 17.5c-1.4-1.587-2.1-3.42-2.1-5.5zM12 20.34c-1.894 0-3.594-.587-5.101-1.759.601-1.187 1.524-2.322 2.771-3.401 1.246-1.08 2.483-1.753 3.71-2.02a29.441 29.441 0 0 1 1.56 6.62 8.166 8.166 0 0 1-2.94.56zm7.08-3.96a8.351 8.351 0 0 1-2.58 2.621c-.24-2.08-.7-4.107-1.379-6.081.932-.066 1.765-.1 2.5-.1.799 0 1.686.034 2.659.1a8.098 8.098 0 0 1-1.2 3.46zm-1.24-5c-1.16 0-2.233.047-3.22.14a27.053 27.053 0 0 0-.68-1.62c2.066-.906 3.532-2.006 4.399-3.3 1.2 1.414 1.854 3.027 1.96 4.84-.812-.04-1.632-.06-2.459-.06z"
                ></path></svg
            ></a>
          </div>
        </div>-->
      </div>
      <div
        class="mx-auto mt-14 w-full max-w-md text-center md:mt-20 lg:mt-24"
      ></div>
    </div>
  </section>

  <section
    id="unterstutzen"
    class="black relative px-[5%] py-16 md:py-24 lg:py-28 bg-neutral-950"
  >
    <div class="relative z-10 container">
      <div
        class="grid grid-rows-1 items-start gap-y-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:gap-y-16"
      >
        <div>
          <h1 class="text-3xl font-bold text-white">Hab ich euch überzeugt?</h1>
        </div>
        <div>
          <p class="text-md text-white">
            Ich möchte den MemoryTag im November auf dem Elevator Pitch der IHK
            Ulm-Biberach vorstellen - um meine Vision weiterzutragen. Wenn ihr
            mich unterstützen wollt, könnt ihr gerne für den MemoryTag
            abstimmen. <br />
            Bald wird es auch möglich sein, den MemoryTag im Shop
            vorzubestellen.
          </p>
          <div class="mt-6 flex flex-wrap gap-4 md:mt-8">
            <a
              data-slot="button"
              class="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-[var(--primary-color)] bg-[var(--primary-color)] text-white px-6 py-3"
              title="IHK Pitch Abstimmung"
              role="button"
              href="https://www.ihk.de/ulm/hauptnavigation/existenzgruendung/veranstaltungen-termine/ihk-netzwerktag-2024-6734278?shortUrl=%2Fnetzwerktag"
              target="_blank"
            >
              IHK Pitch Abstimmung
            </a>
            <a
              data-slot="button"
              class="inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-b-neutral-300 text-neutral-300 px-6 py-3 cursor-not-allowed"
              title="Warteliste im Shop"
              role="button"
              target="_blank"
            >
              Warteliste im Shop
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="px-[5%] py-12 md:py-18 lg:py-20">
    <div class="container">
      <div
        class="grid grid-cols-1 items-center justify-center gap-x-[8vw] gap-y-12 sm:gap-y-10 md:gap-y-14"
      >
        <div class="flex flex-col items-center">
          <a href="#" class="mb-8"
            ><img src="/logo.svg" alt="Logo image" class="inline-block h-16"
          /></a>
        </div>
      </div>
      <div class="h-px w-full bg-scheme-border"></div>
      <div
        class="text-sm flex flex-col items-start justify-start pt-6 pb-4 md:flex-row md:items-center md:justify-between md:pt-8 md:pb-0 md:text-center gap-6"
      >
        <ul
          class="text-sm grid grid-flow-row grid-cols-[max-content] gap-y-4 md:grid-flow-col md:gap-x-6 md:gap-y-0 lg:justify-center"
        >
          <li class="underline">
            <NuxtLink to="impressum">Impressum</NuxtLink>
          </li>
        </ul>
        <p>© 2025 LHC Momentify. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style>
:root {
  --primary-color: #0771b3;
  --secondary-color: #34495e;
  --background-color: #ffffff;
  --surface-color: #ffffff;
  --background-color-darker: #dcdcdc;
  --text-color: #2c3e50;
  --text-color-inverted: #e3f1ff;
  --border-color: #cdcdcd;
  --error-text-color: red;
  --icon-filter: brightness(0) saturate(100%);
  --skeleton-gradient: linear-gradient(
    90deg,
    #f0f0f0 0%,
    #e0e0e0 50%,
    #f0f0f0 100%
  );
  --logo-pill-background: rgba(255, 255, 255, 0.4);
  --logo-pill-box-shadow: inset 0 0px 8px 3px rgba(220, 220, 220, 0.3);
  --navigation-container-box-shadow: 0px 15px 15px 1px rgb(0 0 0 / 30%);
}

[data-theme="dark"] {
  --primary-color: #0b8bdc;
  --secondary-color: #e3f1ff;
  --background-color: #202020;
  --surface-color: #202020;
  --background-color-darker: #121212;
  --text-color: #e3f1ff;
  --text-color-inverted: #2c3e50;
  --border-color: #5c5c5c;
  --icon-filter: brightness(0) saturate(100%) invert(96%) sepia(38%)
    saturate(0%) hue-rotate(298deg) brightness(108%) contrast(101%);
  --skeleton-gradient: linear-gradient(
    90deg,
    #555555 0%,
    #2c2c2c 50%,
    #555555 100%
  );
  --logo-pill-background: rgba(0, 0, 0, 0.2);
  --logo-pill-box-shadow: inset 0 0px 8px 3px rgb(37 37 37 / 30%);
  --navigation-container-box-shadow: 0px 15px 15px 1px rgb(0 0 0 / 82%);
}

* {
  scroll-behavior: smooth;
}

html {
  background: #060a0d;
}

.container {
  margin: 0 auto;
}

.hero {
  background: linear-gradient(
    270deg,
    rgba(10, 16, 18, 1) 0%,
    rgba(6, 10, 13, 1) 100%
  );
}

@media screen and (min-width: 48rem) {
  .hero {
    background-image: url("/hero-desktop.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
    min-height: clamp(400px, 80vh, 800px);
    display: flex;
    align-items: center;
  }
}

.navbar {
  background: linear-gradient(
    270deg,
    rgba(10, 16, 18, 1) 0%,
    rgba(6, 10, 13, 1) 100%
  );
}

section:not(.black),
footer {
  background-color: var(--background-color);
}
</style>
<script setup lang="ts"></script>
