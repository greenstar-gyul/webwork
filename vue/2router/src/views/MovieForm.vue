<script>
export default {
  data: function () {
    return {
      movies: [],
      // openDt: "20250423",
      date: "2025-04-23"
    }
  },
  methods: {
    // search() {
    //   fetch(`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=12664b24453335d2c3eca0fdc4b3b013&targetDt=${this.openDt}`)
    //   .then(response => response.json())
    //   .then(json => { this.movies = json['boxOfficeResult']['dailyBoxOfficeList']; console.log(this.movies); } )
    //   console.log(this.openDt);
    // },
    dateSearch() {
      fetch(`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=12664b24453335d2c3eca0fdc4b3b013&targetDt=${this.date.replaceAll('-', '')}`)
        .then(response => response.json())
        .then(json => { this.movies = json['boxOfficeResult']['dailyBoxOfficeList']; console.log(this.movies); })
      console.log(this.date.replaceAll('-', ''));
    }
  },
  mounted() {
    // this.search();
    this.dateSearch();
  }
}
</script>
<template>
  <table class="tbl">
    <tr>
      <th>영화 코드</th>
      <th>영화 이름</th>
      <th>상영 날짜</th>
    </tr>
    <tr v-for="movie in movies">
      <td>{{ movie.movieCd }}</td>
      <td class="text-left">{{ movie.movieNm }}</td>
      <td>{{ movie.openDt }}</td>
    </tr>
  </table>
  <!-- <input type="text" v-model="openDt"> <button @click="search()">조회</button><br> -->
  <div class="date">
    <input type="date" v-model="date"> <button @click="dateSearch()">조회</button>
  </div>
  <!-- <select v-model="openDy">
      <option v-for="movie in movies" :value="movie.openDt">{{movie.openDt}}</option>
    </select> -->
</template>
<style>
.tbl {
  border-collapse: collapse;
  margin: 10px;
}

.tbl th {
  padding: 5px;
  background-color: rgb(193, 255, 255);
  border: 1px solid;
}

.tbl td {
  padding: 5px;
  border: 1px solid;
  text-align: center;
  background-color: aliceblue;
}

.tbl .text-left {
  text-align: left;
}

.date {
  margin: 10px;
}

.date input {
  font-size: 18px;
}
</style>