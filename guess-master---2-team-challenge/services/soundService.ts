
class SoundService {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private compressor: DynamicsCompressorNode | null = null;

  private init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // Nodo de Ganancia Maestra
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.8; 

      // Compresor para evitar distorsión en móviles
      this.compressor = this.ctx.createDynamicsCompressor();
      this.compressor.threshold.setValueAtTime(-24, this.ctx.currentTime);
      this.compressor.knee.setValueAtTime(40, this.ctx.currentTime);
      this.compressor.ratio.setValueAtTime(12, this.ctx.currentTime);
      this.compressor.attack.setValueAtTime(0, this.ctx.currentTime);
      this.compressor.release.setValueAtTime(0.25, this.ctx.currentTime);

      this.masterGain.connect(this.compressor);
      this.compressor.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  private playTone(freq: number, type: OscillatorType, duration: number, volume: number = 0.3) {
    this.init();
    if (!this.ctx || !this.masterGain) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
    
    gain.gain.setValueAtTime(volume, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  }

  playCorrect() {
    this.playTone(660, 'sine', 0.15, 0.5); 
    setTimeout(() => this.playTone(880, 'sine', 0.25, 0.5), 60);
  }

  playSkip() {
    this.playTone(220, 'triangle', 0.3, 0.6);
  }

  playTick() {
    this.playTone(1000, 'sine', 0.05, 0.2);
  }

  playStart() {
    this.playTone(523, 'square', 0.1, 0.3);
    setTimeout(() => this.playTone(659, 'square', 0.1, 0.3), 100);
    setTimeout(() => this.playTone(783, 'square', 0.5, 0.4), 200);
  }

  playEnd() {
    // Sonido neutro: doble tono tipo campana (A5, E5)
    this.playTone(880, 'sine', 0.4, 0.4);
    setTimeout(() => this.playTone(659.25, 'sine', 0.6, 0.3), 150);
  }

  playClick() {
    this.playTone(1400, 'sine', 0.04, 0.2);
  }

  playPop() {
    this.playTone(700, 'sine', 0.12, 0.3);
  }

  playVictory() {
    // Fanfarria festiva y larga: C5, E5, G5, C6, G5, C6 (Arpegio ascendente y final potente)
    const tones = [523.25, 659.25, 783.99, 1046.50, 783.99, 1046.50, 1318.51];
    tones.forEach((freq, i) => {
      setTimeout(() => {
        const dur = i === tones.length - 1 ? 1.5 : 0.2;
        const vol = i === tones.length - 1 ? 0.7 : 0.4;
        this.playTone(freq, i % 2 === 0 ? 'sine' : 'triangle', dur, vol);
      }, i * 150);
    });
  }
}

export const soundService = new SoundService();
