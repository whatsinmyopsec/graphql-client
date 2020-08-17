<template>
  <v-layout class="mt-3" justify-center>
    <v-flex xs12 sm6 md4 lg5 text-xs-center>
      <v-card max-width="800" class="elevation-12">
        <v-card-title class="headline">Examples</v-card-title>
        <v-container>
          <v-row>
            <v-col v-for="(item, i) in items" :key="i" cols="12">
              <v-card elevation-12>
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title
                      class="headline"
                      v-text="item.title"
                    ></v-card-title>
                    <v-card-subtitle v-text="item.query"></v-card-subtitle>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          title: "All Downloads",
          query:
            "{getAllDownloads(count:10){id destfile duplicate eventid message outfile sensor session shasum src_ip timestamp url}}",
        },
        {
          title: "Download by ID",
          query:
            '{getDownloadByID(id:"5f09004a74eff8e66e689f17"){id destfile duplicate eventid message outfile sensor session shasum src_ip timestamp url}}',
        },
        {
          title: "All Malware results",
          query:
            "{getAllMalwareResults(count:10){id total positives scan_date resource scans{Qihoo_360{detected version result update}}}}",
        },
        {
          title: "All Malware scanners",
          query:
            "Bkav TotalDefence MicroWorld_eScan CMC McAfee Malwarebytes Zillya SUPERAntiSpyware K7AntiVirus K7GW Baidu Symantec Avast ClamAV Kaspersky BitDefender ViRobot Rising Sophos Comodo DrWeb VIPRE TrendMicro FireEye Emsisoft Ikarus Cyren Jiangmin Avira Fortinet Kingsoft Arcabit AegisLab ZoneAlarm Microsoft ALYac MAX VBA32 Zoner Tencent Yandex TACHYON GData AVG Panda MicroWorld_eScan CAT_QuickHeal F_Prot ESET_NOD32 TrendMicro_HouseCall NANO_Antivurus Ad_Aware F_Secure McAfee_GQ_Edition Antiy_AVL Avast_Mobile AhnLab_v3 Qihoo_360",
        },
        {
          title: "Malware by ID",
          query:
            '{getMalwareByID(id:"5f0b2fabf4720cb9c15225fe"){id total positives scan_date resource scans{Bkav{detected result version update}}}}',
        },
        {
          title: "Download by shasum",
          query:
            '{getLogByShasum(count:10)(shasum:"ff6f81930943c96a37d7741cd547ad90295a9bd63b6194b2a834a1d32bc8f85d"){id destfile duplicate eventid message outfile sensor session shasum src_ip timestamp url}}',
        },
        {
          title: "Malware by hash",
          query:
            '{getMalwareByHash(count:10)(resource:"00ce2b7587eb0ff6663f57ed5d59ceabacad865f1c06b4ca8c8c7416b74b7b5a"){id total positives scan_date resource scans{Bkav{detected result version update}}}}',
        },
        {
          title: "Malware by positives",
          query:
            "{getMalwareByPostives(positives:10){id total positives scan_date resource scans{Bkav{detected result version update}}}}",
        },
        {
          title: "All ipinfo results",
          query:
            "{getAllIpinfoResults(count:10){id ip hostname city region country loc org postal timezone country_name latitude longitude createdAt}}",
        },
        {
          title: "Ipinfo by date",
          query:
            '{getAllIpinfosByDate(createdAt:"2020_02_04"){id ip hostname city region country loc org postal timezone country_name latitude longitude createdAt}}',
        },
        {
          title: "Ipinfo by ip",
          query:
            '{getAllIpinfosByIp(ip:"54.37.204.154"){id ip hostname city region country loc org postal timezone country_name latitude longitude createdAt}}',
        },
        {
          title: "Ipinfo by ID",
          query:
            '{getIpinfoByID(id:"5f0b5395ab2b174e95f6f558"){id ip hostname city region country loc org postal timezone country_name latitude longitude createdAt}}',
        },
        {
          title: "Input query",
          query:
            "{getAllInputs(count:20){sensor eventid src_ip input session timestamp message}}",
        },
      ],
    };
  },
};
</script>
