import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Tanpa judul",
    description: "Tidak ada deskripsi",
  },
  components: {
    callout: {
      note: "Catatan",
      abstract: "Abstrak",
      info: "Info",
      todo: "Todo",
      tip: "Tip",
      success: "Sukses",
      question: "Pertanyaan",
      warning: "Peringatan",
      failure: "Kegagalan",
      danger: "Bahaya",
      bug: "Bug",
      example: "Contoh",
      quote: "Kutipan",
    },
    backlinks: {
      title: "Tautan balik",
      noBacklinksFound: "Tidak menemukan tautan balik",
    },
    themeToggle: {
      lightMode: "Mode terang",
      darkMode: "Mode gelap",
    },
    explorer: {
      title: "Jelajahi",
    },
    footer: {
      createdWith: "Dibuat oleh",
    },
    graph: {
      title: "Tampilan Grafik",
    },
    recentNotes: {
      title: "Catatan Terbaru",
      seeRemainingMore: ({ remaining }) => `Lihat ${remaining} lainnya →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Transkrip dari ${targetSlug}`,
      linkToOriginal: "Tautan ke sumber asli",
    },
    search: {
      title: "Pencarian",
      searchBarPlaceholder: "Mencari sesuatu",
    },
    tableOfContents: {
      title: "Kerangka Konten",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `baca ${minutes} menit`,
    },
  },
  pages: {
    rss: {
      recentNotes: "Catatan terbaru",
      lastFewNotes: ({ count }) => `${count} catatan terakhir`,
    },
    error: {
      title: "Tidak ditemukan.",
      notFound: "Halaman ini bersifat pribadi atau tidak ada.",
      home: "Kembali ke Beranda",
    },
    folderContent: {
      folder: "Folder",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "1 item dalam folder ini." : `${count} item dalam folder ini.`,
    },
    tagContent: {
      tag: "Tag",
      tagIndex: "Tag Index",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 item dengan tag ini." : `${count} dengan tag ini.`,
      showingFirst: ({ count }) => `Tampilkan ${count} tag pertama.`,
      totalTags: ({ count }) => `Menemukan total ${count} tag.`,
    },
  },
} as const satisfies Translation
