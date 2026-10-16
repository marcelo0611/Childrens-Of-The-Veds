import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const checklist = [
  { label: 'Acompanhamento contra a gripe', checked: true },
  { label: 'Conservar sobre o plano de parto', checked: true },
  { label: 'Preparar o quarto do bebê', checked: false },
  { label: 'Ler sobre amamentação', checked: false },
  { label: 'Organizar documentos', checked: false },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <View style={styles.deviceFrame}>
        <View style={styles.statusBar}>
          <Text style={styles.statusTime}>9:41</Text>
          <View style={styles.statusIcons}>
            <Text style={styles.statusIcon}>◔</Text>
            <Text style={styles.statusIcon}>📶</Text>
            <Text style={styles.statusIcon}>🔋</Text>
          </View>
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.headerCard}>
            <View style={styles.headerTopRow}>
              <View style={styles.logoWrap}>
                <Text style={styles.logoIcon}>👨‍👩‍👧</Text>
              </View>
              <Text style={styles.logoText}>Pai de</Text>
              <View style={styles.notificationDot}>
                <Text style={styles.notificationIcon}>🔔</Text>
              </View>
            </View>

            <Text style={styles.pageTitle}>Primeira Viagem</Text>

            <Text style={styles.sectionLabel}>Você está em</Text>
            <Text style={styles.weekTitle}>Semana 26</Text>
            <Text style={styles.weekSubtitle}>2º trimestre • os dias para conhecer</Text>
            <Text style={styles.weekSubtitle}>seu bebê</Text>

            <View style={styles.progressBox}>
              <View style={styles.progressHeader}>
                <Text style={styles.progressTitle}>Progresso da jornada</Text>
                <Text style={styles.progressPercent}>60%</Text>
              </View>
              <View style={styles.progressTrack}>
                <View style={styles.progressFill} />
              </View>
              <Text style={styles.progressAction}>Ver tudo</Text>
            </View>

            <View style={styles.checkList}>
              {checklist.map((item) => (
                <View key={item.label} style={styles.checkRow}>
                  <View style={[styles.checkbox, item.checked && styles.checkboxChecked]}>
                    {item.checked ? <Text style={styles.checkMark}>✓</Text> : null}
                  </View>
                  <Text
                    style={[styles.checkLabel, item.checked && styles.checkLabelChecked]}
                  >
                    {item.label}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.babyCard}>
            <View style={styles.babyVisualWrap}>
              <View style={styles.babyAvatar}>
                <View style={styles.babyHead} />
                <View style={styles.babyBody} />
              </View>
              <View style={styles.avocadoShape}>
                <View style={styles.avocadoSeed} />
              </View>
            </View>

            <Text style={styles.babyTitle}>Seu bebê está do tamanho de um</Text>
            <Text style={styles.babyFruit}>Abacate</Text>
            <Text style={styles.babySize}>Cerca de 33 cm e 900 g</Text>
          </View>
        </ScrollView>

        <View style={styles.tabBar}>
          {['Início', 'Ferramentas', 'Comunidade', 'Perfil'].map((label, index) => (
            <View key={label} style={[styles.tabItem, index === 0 && styles.tabItemActive]}>
              <Text style={[styles.tabIcon, index === 0 && styles.tabIconActive]}>
                {index === 0 ? '⌂' : index === 1 ? '◫' : index === 2 ? '◌' : '◍'}
              </Text>
              <Text style={[styles.tabLabel, index === 0 && styles.tabLabelActive]}>
                {label}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#DCECF0',
  },
  deviceFrame: {
    flex: 1,
    width: '100%',
    maxWidth: 420,
    alignSelf: 'center',
    backgroundColor: '#F4F7FB',
    borderRadius: 32,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(15, 23, 42, 0.08)',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingTop: 12,
    paddingBottom: 8,
    backgroundColor: '#F4F7FB',
  },
  statusTime: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0F172A',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statusIcon: {
    fontSize: 13,
    color: '#0F172A',
  },
  scrollContent: {
    paddingHorizontal: 18,
    paddingBottom: 16,
  },
  headerCard: {
    backgroundColor: '#F2F7FA',
    borderRadius: 28,
    paddingHorizontal: 18,
    paddingVertical: 18,
    marginTop: 8,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  headerTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  logoWrap: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#CBE7F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoIcon: {
    fontSize: 18,
  },
  logoText: {
    flex: 1,
    marginLeft: 8,
    color: '#0F172A',
    fontSize: 16,
    fontWeight: '600',
  },
  notificationDot: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationIcon: {
    fontSize: 15,
  },
  pageTitle: {
    color: '#0F172A',
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 10,
  },
  sectionLabel: {
    color: '#475569',
    fontSize: 13,
    lineHeight: 18,
  },
  weekTitle: {
    color: '#0F172A',
    fontSize: 28,
    fontWeight: '800',
    marginTop: 2,
    marginBottom: 2,
  },
  weekSubtitle: {
    color: '#475569',
    fontSize: 13,
    lineHeight: 18,
  },
  progressBox: {
    marginTop: 18,
    marginBottom: 10,
    backgroundColor: '#EAF7F1',
    borderRadius: 14,
    padding: 12,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressTitle: {
    color: '#0F172A',
    fontSize: 12,
    fontWeight: '700',
  },
  progressPercent: {
    color: '#0F172A',
    fontSize: 12,
    fontWeight: '700',
  },
  progressTrack: {
    height: 8,
    backgroundColor: '#DDE7E3',
    borderRadius: 999,
    overflow: 'hidden',
  },
  progressFill: {
    width: '60%',
    height: '100%',
    backgroundColor: '#A8DADC',
    borderRadius: 999,
  },
  progressAction: {
    marginTop: 8,
    color: '#0F172A',
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'right',
  },
  checkList: {
    marginTop: 8,
    gap: 10,
  },
  checkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1.5,
    borderColor: '#D0D7DE',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#A8DADC',
    borderColor: '#A8DADC',
  },
  checkMark: {
    color: '#0F172A',
    fontSize: 11,
    fontWeight: '800',
  },
  checkLabel: {
    flex: 1,
    color: '#475569',
    fontSize: 12,
    lineHeight: 18,
  },
  checkLabelChecked: {
    color: '#0F172A',
    fontWeight: '600',
  },
  babyCard: {
    marginTop: 18,
    marginBottom: 8,
    backgroundColor: '#F8F8F8',
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
  },
  babyVisualWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    gap: 16,
  },
  babyAvatar: {
    width: 110,
    height: 110,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  babyHead: {
    width: 44,
    height: 44,
    backgroundColor: '#F7D7B4',
    borderRadius: 22,
    position: 'absolute',
    top: 8,
  },
  babyBody: {
    width: 66,
    height: 64,
    backgroundColor: '#57B4D1',
    borderRadius: 24,
    position: 'absolute',
    bottom: 10,
  },
  avocadoShape: {
    width: 72,
    height: 92,
    backgroundColor: '#A7D36F',
    borderRadius: 30,
    position: 'relative',
    transform: [{ rotate: '18deg' }],
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  avocadoSeed: {
    width: 18,
    height: 18,
    backgroundColor: '#D8B48B',
    borderRadius: 9,
    position: 'absolute',
    top: 18,
    left: 26,
  },
  babyTitle: {
    color: '#0F172A',
    fontSize: 14,
    textAlign: 'center',
  },
  babyFruit: {
    color: '#0F172A',
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 4,
  },
  babySize: {
    color: '#475569',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 4,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
  },
  tabItemActive: {
    backgroundColor: '#F6FAFC',
    borderRadius: 12,
  },
  tabIcon: {
    fontSize: 18,
    color: '#64748B',
  },
  tabIconActive: {
    color: '#0F172A',
  },
  tabLabel: {
    fontSize: 10,
    color: '#64748B',
    marginTop: 4,
  },
  tabLabelActive: {
    color: '#0F172A',
    fontWeight: '700',
  },
});
