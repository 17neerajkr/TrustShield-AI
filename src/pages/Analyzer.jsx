import React, { useState, useRef, useCallback } from 'react'
import { MessageSquare, Image, Upload, X, AlertCircle, Zap } from 'lucide-react'
import { analyzeText, analyzeImage } from '../services/analysisService'
import AnalysisLoader from '../components/AnalysisLoader'
import ResultsPanel from '../components/ResultsPanel'

const MAX_CHARS = 3000

const SAMPLE_MESSAGES = {
  suspicious: `URGENT: Your bank account has been suspended! Click here immediately to verify your identity and avoid permanent account closure. Enter your password and OTP at: http://secure-bank-verify.net/login. Act NOW before your account is permanently deleted.`,
  trusted: `Hi Sarah, just a reminder that our team sync is tomorrow at 10am. I've shared the agenda doc with you on Google Drive. Let me know if you have any items to add. Looking forward to catching up! - Marcus`,
}

export default function Analyzer() {
  const [activeTab, setActiveTab] = useState('text')
  const [message, setMessage] = useState('')
  const [image, setImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)
  const fileInputRef = useRef(null)
  const dropZoneRef = useRef(null)

  // UPDATE SECTION 


  // const handleTextAnalysis = async () => {
  //   if (!message.trim()) {
  //     setError('Please enter a message to analyze.')
  //     return
  //   }
  //   if (message.trim().length < 10) {
  //     setError('Message is too short for meaningful analysis. Please enter at least 10 characters.')
  //     return
  //   }
  //   setError(null)
  //   setIsLoading(true)
  //   try {
  //     const res = await analyzeText(message)
  //     setResult(res)
  //   } catch (err) {
  //     setError('Analysis failed. Please try again.')
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }

//   const handleTextAnalysis = async () => {

//   if (!message.trim()) {

//     setError('Please enter a message to analyze.')

//     return
//   }

//   if (message.trim().length < 10) {

//     setError(
//       'Message is too short for meaningful analysis. Please enter at least 10 characters.'
//     )

//     return
//   }

//   setError(null)

//   setIsLoading(true)

//   try {

//     const res = await analyzeText(message)

//     setResult({

//       prediction:
//         res.ml_analysis.verdict === 'Scam'
//           ? 'Suspicious'
//           : 'Trusted',

//       trust_score: Math.round(
//         res.final_analysis.trust_score
//       ),

//       confidence:
//         Math.round(
//           res.ml_analysis.scam_probability
//         ),

//       risk_level:
//         res.rule_analysis.rule_score >= 80
//           ? 'High'
//           : res.rule_analysis.rule_score >= 40
//           ? 'Medium'
//           : 'Low',

//       explanation:
//         res.rule_analysis.reasons.length > 0
//           ? res.rule_analysis.reasons
//           : [
//               'No suspicious indicators detected.'
//             ],

//       recommendations: [

//         res.final_analysis.recommendation,

//         res.ml_analysis.recommendation,

//         res.final_analysis.suggested_action,

//         res.final_analysis.safety_tip

//       ],

//       analyzed_at:
//         new Date().toISOString(),

//       char_count:
//         message.length,

//       flags:
//         res.rule_analysis.matched_rules
//           .slice(0, 5)
//           .map(rule => rule.phrase)

//     })

//   } catch (err) {

//     setError(

//       err.message ||

//       'Analysis failed. Please try again.'

//     )

//   } finally {

//     setIsLoading(false)

//   }
// }

// const handleTextAnalysis = async () => {

// console.log("RESPONSE DATA =", res)
// console.log("ML =", res?.ml_analysis)
// console.log("RULE =", res?.rule_analysis)
// console.log("FINAL =", res?.final_analysis)

//   if (!message.trim()) {
//     setError('Please enter a message to analyze.')
//     return
//   }

//   if (message.trim().length < 10) {
//     setError(
//       'Message is too short for meaningful analysis. Please enter at least 10 characters.'
//     )
//     return
//   }

//   setError(null)
//   setIsLoading(true)

//   try {

//     const res = await analyzeText(message)

//     console.log("API Response:", res)

//     if (
//       !res ||
//       !res.ml_analysis ||
//       !res.rule_analysis ||
//       !res.final_analysis
//     ) {

//       throw new Error(
//         "Invalid response received from Flask API."
//       )
//     }

//     setResult({

//       prediction:
//         res.ml_analysis?.verdict === 'Scam'
//           ? 'Suspicious'
//           : 'Trusted',

//       trust_score:
//         Math.round(
//           res.final_analysis?.trust_score || 0
//         ),

//       confidence:
//         Math.round(
//           res.ml_analysis?.scam_probability || 0
//         ),

//       risk_level:
//         res.rule_analysis?.rule_score >= 80
//           ? 'High'
//           : res.rule_analysis?.rule_score >= 40
//           ? 'Medium'
//           : 'Low',

//       explanation:
//         res.rule_analysis?.reasons?.length > 0
//           ? res.rule_analysis.reasons
//           : ['No suspicious indicators detected.'],

//       recommendations: [

//         res.final_analysis?.recommendation || '',

//         res.ml_analysis?.recommendation || '',

//         res.final_analysis?.suggested_action || '',

//         res.final_analysis?.safety_tip || ''

//       ],

//       analyzed_at:
//         new Date().toISOString(),

//       char_count:
//         message.length,

//       flags:
//         res.rule_analysis?.matched_rules
//           ?.slice(0, 5)
//           ?.map(rule => rule.phrase) || []

//     })

//   } catch (err) {

//     console.error("Analysis Error:", err)

//     setError(
//       err.message ||
//       'Analysis failed. Please try again.'
//     )

//   } finally {

//     setIsLoading(false)

//   }
// }

const handleTextAnalysis = async () => {

    if (!message.trim()) {

        setError(
            'Please enter a message to analyze.'
        );

        return;
    }

    if (message.trim().length < 10) {

        setError(
            'Message is too short for meaningful analysis. Please enter at least 10 characters.'
        );

        return;
    }

    setError(null);

    setIsLoading(true);

    try {

        const res = await analyzeText(
            message
        );

        console.log(
            "FULL RESPONSE:",
            JSON.stringify(res, null, 2)
        );

        console.log(
            "ML:",
            res?.ml_analysis
        );

        console.log(
            "RULE:",
            res?.rule_analysis
        );

        console.log(
            "FINAL:",
            res?.final_analysis
        );

        setResult({

            prediction:
                res?.ml_analysis?.verdict === "Scam"
                    ? "Suspicious"
                    : "Trusted",

            trust_score:
                Math.round(
                    res?.final_analysis?.trust_score || 0
                ),

            confidence:
                Math.round(
                    res?.ml_analysis?.scam_probability || 0
                ),

            risk_level:
                (res?.rule_analysis?.rule_score || 0) >= 80
                    ? "High"
                    : (res?.rule_analysis?.rule_score || 0) >= 40
                    ? "Medium"
                    : "Low",

            explanation:
                res?.rule_analysis?.reasons?.length > 0
                    ? res.rule_analysis.reasons
                    : [
                        "No suspicious indicators detected."
                    ],

            recommendations: [

                res?.final_analysis?.recommendation || "",

                res?.ml_analysis?.recommendation || "",

                res?.final_analysis?.suggested_action || "",

                res?.final_analysis?.safety_tip || ""

            ],

            analyzed_at:
                new Date().toISOString(),

            char_count:
                message.length,

            flags:
                res?.rule_analysis?.matched_rules
                    ?.slice(0, 5)
                    ?.map(
                        rule => rule.phrase
                    ) || []

        });

    } catch (err) {

        console.error(
            "Analysis Error:",
            err
        );

        setError(

            err.message ||

            "Analysis failed. Please try again."

        );

    } finally {

        setIsLoading(false);

    }
};
//  IMAGE SECTION 

//   const handleImageAnalysis = async () => {
//     if (!image) {
//       setError('Please upload an image to analyze.')
//       return
//     }
//     setError(null)
//     setIsLoading(true)
//     try {
//       const res = await analyzeImage(image)
//       setResult(res)
//     } catch (err) {
//       setError('Image analysis failed. Please try again.')
//     } finally {
//       setIsLoading(false)
//     }
//   }


// const handleImageAnalysis = async () => {

//     if (!image) {

//         setError(
//             'Please upload an image to analyze.'
//         );

//         return;
//     }

//     setError(null);

//     setIsLoading(true);

//     try {

//         const res = await analyzeImage(
//             image
//         );

//         setResult({

//             prediction:
//     res?.ml_analysis?.verdict === 'Scam'
//         ? 'Suspicious'
//         : 'Trusted',

//             trust_score:
//     Math.round(
//         res?.final_analysis?.trust_score || 0
//     ),

//             confidence:
//                 Math.round(
//                     res.ml_analysis.scam_probability
//                 ),

//             risk_level:
//                 res.rule_analysis.rule_score >= 80
//                     ? 'High'
//                     : res.rule_analysis.rule_score >= 40
//                     ? 'Medium'
//                     : 'Low',

//             explanation: [

//                 `OCR Extracted: ${res.extracted_text}`,

//                 ...res.rule_analysis.reasons

//             ],

//             recommendations: [

//                 res.final_analysis.recommendation,

//                 res.ml_analysis.recommendation,

//                 res.final_analysis.suggested_action,

//                 res.final_analysis.safety_tip

//             ],

//             analyzed_at:
//                 new Date().toISOString(),

//             char_count:
//                 res.extracted_text.length,

//             flags:
//                 res.rule_analysis.matched_rules
//                     .slice(0, 5)
//                     .map(rule => rule.phrase)

//         });

//     } catch (err) {

//         setError(

//             err.message ||

//             'Image analysis failed.'

//         );

//     } finally {

//         setIsLoading(false);

//     }
// };


const handleImageAnalysis = async () => {

    if (!image) {

        setError(
            'Please upload an image to analyze.'
        );

        return;
    }

    setError(null);

    setIsLoading(true);

    try {

        const res = await analyzeImage(
            image
        );

        console.log(
            "OCR RESPONSE:",
            JSON.stringify(res, null, 2)
        );

        setResult({

            prediction:
                res?.ml_analysis?.verdict === 'Scam'
                    ? 'Suspicious'
                    : 'Trusted',

            trust_score:
                Math.round(
                    res?.final_analysis?.trust_score || 0
                ),

            confidence:
                Math.round(
                    res?.ml_analysis?.scam_probability || 0
                ),

            risk_level:
                (res?.rule_analysis?.rule_score || 0) >= 80
                    ? 'High'
                    : (res?.rule_analysis?.rule_score || 0) >= 40
                    ? 'Medium'
                    : 'Low',

            explanation:

                res?.rule_analysis?.reasons?.length > 0

                    ? [

                        `OCR Extracted: ${res?.extracted_text || ''}`,

                        ...res.rule_analysis.reasons

                    ]

                    : [

                        `OCR Extracted: ${res?.extracted_text || ''}`

                    ],

            recommendations: [

                res?.final_analysis?.recommendation || '',

                res?.ml_analysis?.recommendation || '',

                res?.final_analysis?.suggested_action || '',

                res?.final_analysis?.safety_tip || ''

            ],

            analyzed_at:
                new Date().toISOString(),

            char_count:
                res?.extracted_text?.length || 0,

            flags:
                res?.rule_analysis?.matched_rules
                    ?.slice(0, 5)
                    ?.map(rule => rule.phrase) || []

        });

    } catch (err) {

        console.error(
            "OCR Error:",
            err
        );

        setError(

            err.message ||

            'Image analysis failed.'

        );

    } finally {

        setIsLoading(false);

    }
};


  const handleFileSelect = (file) => {
    if (!file) return
    const validTypes = ['image/png', 'image/jpg', 'image/jpeg']
    if (!validTypes.includes(file.type)) {
      setError('Only PNG, JPG, and JPEG files are supported.')
      return
    }
    if (file.size > 10 * 1024 * 1024) {
      setError('File size must be under 10MB.')
      return
    }
    setError(null)
    setImage(file)
    const reader = new FileReader()
    reader.onload = (e) => setImagePreview(e.target.result)
    reader.readAsDataURL(file)
  }

  const handleDrop = useCallback((e) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    handleFileSelect(file)
  }, [])

  const handleDragOver = (e) => { e.preventDefault(); setIsDragging(true) }
  const handleDragLeave = () => setIsDragging(false)

  const reset = () => {
    setResult(null)
    setMessage('')
    setImage(null)
    setImagePreview(null)
    setError(null)
  }

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 pt-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-mono mb-6">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            AI Threat Intelligence — Active
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Message Analyzer
          </h1>
          <p className="text-slate-400 max-w-lg mx-auto">
            Submit any message for AI-powered trust analysis. Get a verdict and security recommendations in seconds.
          </p>
        </div>

        {/* Main panel */}
        {result ? (
          <ResultsPanel result={result} onReset={reset} />
        ) : isLoading ? (
          <AnalysisLoader />
        ) : (
          <div className="glass-card overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-white/5">
              {[
                { id: 'text', icon: MessageSquare, label: 'Text Analysis' },
                { id: 'image', icon: Image, label: 'Image Analysis' },
              ].map(tab => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => { setActiveTab(tab.id); setError(null) }}
                    className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-medium transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'text-blue-400 border-b-2 border-blue-500 bg-blue-500/5'
                        : 'text-slate-400 hover:text-white hover:bg-white/3'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                )
              })}
            </div>

            <div className="p-6 space-y-5">
              {/* Error */}
              {error && (
                <div className="flex items-start gap-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30">
                  <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-red-300 text-sm">{error}</p>
                </div>
              )}

              {activeTab === 'text' ? (
                <>
                  {/* Sample buttons */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-slate-500 text-xs">Try a sample:</span>
                    <button
                      onClick={() => setMessage(SAMPLE_MESSAGES.suspicious)}
                      className="px-3 py-1 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs hover:bg-red-500/20 transition-colors"
                    >
                      Suspicious Message
                    </button>
                    <button
                      onClick={() => setMessage(SAMPLE_MESSAGES.trusted)}
                      className="px-3 py-1 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-xs hover:bg-green-500/20 transition-colors"
                    >
                      Trusted Message
                    </button>
                  </div>

                  {/* Textarea */}
                  <div className="relative">
                    <textarea
                      value={message}
                      onChange={(e) => {
                        if (e.target.value.length <= MAX_CHARS) setMessage(e.target.value)
                      }}
                      placeholder="Paste the message you want to analyze here...&#10;&#10;Example: 'URGENT: Your account has been compromised. Click here to verify...'"
                      rows={10}
                      className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 text-sm font-mono focus:outline-none focus:border-blue-500/50 focus:bg-white/5 resize-none transition-all duration-200"
                    />
                    <div className={`absolute bottom-3 right-3 text-xs font-mono ${message.length > MAX_CHARS * 0.9 ? 'text-amber-400' : 'text-slate-600'}`}>
                      {message.length}/{MAX_CHARS}
                    </div>
                  </div>

                  <button
                    onClick={handleTextAnalysis}
                    disabled={!message.trim()}
                    className="w-full py-3.5 bg-blue-500 hover:bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 hover:scale-[1.01] flex items-center justify-center gap-2"
                    style={{boxShadow: message.trim() ? '0 0 20px rgba(59,130,246,0.3)' : 'none'}}
                  >
                    <Zap className="w-4 h-4" />
                    Analyze Message
                  </button>
                </>
              ) : (
                <>
                  {/* Drop zone */}
                  {!imagePreview ? (
                    <div
                      ref={dropZoneRef}
                      onDrop={handleDrop}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onClick={() => fileInputRef.current?.click()}
                      className={`relative border-2 border-dashed rounded-xl py-16 px-8 text-center cursor-pointer transition-all duration-200 ${
                        isDragging
                          ? 'border-blue-400 bg-blue-500/10'
                          : 'border-white/10 hover:border-blue-500/40 hover:bg-white/3'
                      }`}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/png,image/jpg,image/jpeg"
                        className="hidden"
                        onChange={(e) => handleFileSelect(e.target.files[0])}
                      />
                      <Upload className="w-10 h-10 text-slate-500 mx-auto mb-4" />
                      <p className="text-slate-300 font-medium mb-1">Drop screenshot here or click to upload</p>
                      <p className="text-slate-500 text-sm">Supports PNG, JPG, JPEG — max 10MB</p>
                    </div>
                  ) : (
                    <div className="relative rounded-xl overflow-hidden border border-white/10">
                      <img src={imagePreview} alt="Upload preview" className="w-full max-h-64 object-contain bg-black/20" />
                      <button
                        onClick={() => { setImage(null); setImagePreview(null) }}
                        className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-red-500/70 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                        <p className="text-white/80 text-xs font-mono">{image?.name}</p>
                      </div>
                    </div>
                  )}

                  {/* OCR notice */}
                  <div className="flex items-start gap-3 px-4 py-3 rounded-xl bg-blue-500/5 border border-blue-500/20">
                    <AlertCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-blue-300 text-sm font-medium">OCR Integration </p>
                      <p className="text-slate-500 text-xs mt-0.5">Text extraction from images will be available in the  release version. </p>
                    </div>
                  </div>

                  <button
                    onClick={handleImageAnalysis}
                    disabled={!image}
                    className="w-full py-3.5 bg-blue-500 hover:bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                    style={{boxShadow: image ? '0 0 20px rgba(59,130,246,0.3)' : 'none'}}
                  >
                    <Zap className="w-4 h-4" />
                    Analyze Image
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}