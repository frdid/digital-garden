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
      title: "Catatan Terkini",
      seeRemainingMore: ({ remaining }) => `See ${remaining} more →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Transclude of ${targetSlug}`,
      linkToOriginal: "Tautan ke sumber asli",
    },
    search: {
      title: "Pencarian",
      searchBarPlaceholder: "Mencari sesuatu",
    },
    tableOfContents: {
      title: "Daftar Konten",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `baca ${minutes} menit`,
    },
  },
  pages: {
    rss: {
      recentNotes: "Catatan terkini",
      lastFewNotes: ({ count }) => `${count} catatan terakhir`,
    },
    error: {
      title: "Tidak ditemukan.",
      notFound: "Either this page is private or doesn't exist.",
      home: "Kembali ke beranda",
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
