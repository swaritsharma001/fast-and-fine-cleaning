import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle2, Moon, Sun, AlertCircle } from 'lucide-react';

/**
 * Calculates real-time Dubai (GMT+4 / Asia/Dubai) business status
 * Operating hours: Monday to Sunday: 8:00 AM to 12:00 AM (Midnight)
 */
export const DubaiLiveStatus = ({ variant = 'full' }) => {
  const [dubaiData, setDubaiData] = useState(() => calculateDubaiStatus());

  function calculateDubaiStatus() {
    try {
      const now = new Date();
      const timeFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Dubai',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });

      const dayFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Dubai',
        weekday: 'long',
      });

      const hour24 = parseInt(
        new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Dubai',
          hour: 'numeric',
          hour12: false,
        }).format(now),
        10
      );

      const currentDay = dayFormatter.format(now);
      const currentTime = timeFormatter.format(now);

      // Business is open daily from 8:00 AM (08:00) until 12:00 AM Midnight (24:00)
      const isOpen = hour24 >= 8 && hour24 < 24;
      const isClosingSoon = hour24 === 23;

      let statusText = 'CLOSED NOW';
      let statusSub = 'Opens daily at 8:00 AM';
      let statusColor = 'text-red-400 bg-red-950/40 border-red-500/40';

      if (isOpen) {
        if (isClosingSoon) {
          statusText = 'CLOSING SOON';
          statusSub = 'Closes at 12:00 AM midnight';
          statusColor = 'text-amber-400 bg-amber-950/40 border-amber-500/40';
        } else {
          statusText = 'OPEN NOW';
          statusSub = 'Open today until 12:00 AM midnight';
          statusColor = 'text-emerald-400 bg-emerald-950/40 border-emerald-500/40';
        }
      }

      return {
        currentTime,
        currentDay,
        isOpen,
        isClosingSoon,
        statusText,
        statusSub,
        statusColor,
      };
    } catch {
      // Fallback if Intl is unavailable
      return {
        currentTime: '8:00 AM – 12:00 AM (GST)',
        currentDay: 'Open Daily',
        isOpen: true,
        isClosingSoon: false,
        statusText: 'OPEN NOW',
        statusSub: 'Open daily until midnight',
        statusColor: 'text-emerald-400 bg-emerald-950/40 border-emerald-500/40',
      };
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setDubaiData(calculateDubaiStatus());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (variant === 'badge') {
    return (
      <div
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide border ${dubaiData.statusColor}`}
      >
        <span className="relative flex h-2 w-2">
          {dubaiData.isOpen && (
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                dubaiData.isClosingSoon ? 'bg-amber-400' : 'bg-emerald-400'
              }`}
            />
          )}
          <span
            className={`relative inline-flex rounded-full h-2 w-2 ${
              dubaiData.isOpen
                ? dubaiData.isClosingSoon
                  ? 'bg-amber-400'
                  : 'bg-emerald-400'
                : 'bg-red-400'
            }`}
          />
        </span>
        <span>{dubaiData.statusText}</span>
        <span className="text-zinc-400 text-[11px] font-normal border-l border-zinc-700/60 pl-2">
          {dubaiData.currentTime} (Dubai GMT+4)
        </span>
      </div>
    );
  }

  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  return (
    <div className="w-full">
      {/* Live Status Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 md:p-6 bg-[#161616] rounded-2xl border border-zinc-800 mb-6">
        <div className="flex items-center gap-3.5">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
              dubaiData.isOpen
                ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-400'
                : 'bg-red-950/30 border-red-500/30 text-red-400'
            }`}
          >
            {dubaiData.isOpen ? (
              <Sun className="w-6 h-6 text-emerald-400 animate-spin-slow" />
            ) : (
              <Moon className="w-6 h-6 text-red-400" />
            )}
          </div>
          <div>
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                {dubaiData.isOpen && (
                  <span
                    className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                      dubaiData.isClosingSoon ? 'bg-amber-400' : 'bg-emerald-400'
                    }`}
                  />
                )}
                <span
                  className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                    dubaiData.isOpen
                      ? dubaiData.isClosingSoon
                        ? 'bg-amber-400'
                        : 'bg-emerald-400'
                      : 'bg-red-400'
                  }`}
                />
              </span>
              <span className="font-semibold text-base tracking-wide text-white">
                {dubaiData.statusText}
              </span>
            </div>
            <p className="text-xs md:text-sm text-zinc-400 mt-0.5">
              {dubaiData.statusSub}
            </p>
          </div>
        </div>

        {/* Live Dubai Clock */}
        <div className="text-right">
          <div className="text-xs uppercase tracking-wider text-[#D4AF37] font-medium flex items-center justify-end gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            Live Dubai Time
          </div>
          <div className="text-xl md:text-2xl font-mono font-bold text-white mt-0.5">
            {dubaiData.currentTime}
          </div>
          <div className="text-[11px] text-zinc-500">GST (GMT+4)</div>
        </div>
      </div>

      {/* Schedule Table */}
      <div className="bg-[#121212] rounded-2xl border border-[#D4AF37]/25 overflow-hidden shadow-xl">
        <div className="px-6 py-4 bg-[#181818] border-b border-zinc-800 flex items-center justify-between">
          <span className="text-sm font-semibold text-white uppercase tracking-wider">
            Weekly Operating Schedule
          </span>
          <span className="text-xs text-[#F1D77A] font-medium px-2.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
            Open 7 Days a Week
          </span>
        </div>

        <div className="divide-y divide-zinc-800/80">
          {daysOfWeek.map((day) => {
            const isToday = dubaiData.currentDay === day;
            return (
              <div
                key={day}
                className={`flex items-center justify-between px-6 py-3.5 transition-colors duration-200 ${
                  isToday
                    ? 'bg-[#D4AF37]/10 text-white font-medium'
                    : 'text-zinc-300 hover:bg-zinc-900/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isToday ? 'bg-[#D4AF37] shadow-sm shadow-[#D4AF37]' : 'bg-zinc-700'
                    }`}
                  />
                  <span className={`text-sm ${isToday ? 'font-semibold text-white' : ''}`}>
                    {day}
                  </span>
                  {isToday && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#D4AF37] text-black">
                      Today
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-sm font-mono text-[#F1D77A]">
                    8:00 AM – 12:00 AM
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-4 bg-[#161616] border-t border-zinc-800/80 text-xs text-zinc-400 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
          <span>
            Doorstep laundry pickup and delivery is available daily across Dubai during all working hours.
          </span>
        </div>
      </div>
    </div>
  );
};
